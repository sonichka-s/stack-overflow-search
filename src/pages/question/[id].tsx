import QuestionCard from "@/components/ui/question-card/QuestionCard";
import { IAnswer } from "@/interfaces/Answer.interface";
import { IQuestion, IQuestionData } from "@/interfaces/Question.interface";
import { QuestionService } from "@/services/Question.service";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

const QuestionPage: NextPage<IQuestionData> = ({
  question,
  answers,
}: {
  question: IQuestion;
  answers: IAnswer[];
}) => {
  return <QuestionCard question={question} answers={answers} />;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const questions = await QuestionService.getAllQuestions();

  return {
    paths: questions.map((question) => ({
      params: {
        id: question.question_id.toString(),
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const questionData = await Promise.allSettled([
    QuestionService.getQuestionById(String(params?.id)),
    QuestionService.getQuestionAnswers(String(params?.id)),
  ]);

  const [question, answers] = questionData.map((res) => {
    if (res.status === "fulfilled") return res.value;
  });

  return {
    props: { question, answers },
    revalidate: 60,
  };
};

export default QuestionPage;
