import QuestionCard from "@/components/ui/question-card/question-card";
import { IQuestion, IQuestionData } from "@/interfaces/question.interface";
import { QuestionService } from "@/services/question.service";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

const QuestionPage: NextPage<IQuestionData> = ({ question, answers }) => {
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

export const getStaticProps: GetStaticProps<IQuestionData> = async ({
  params,
}) => {
  const question = await QuestionService.getQuestionById(String(params?.id));
  const answers = await QuestionService.getQuestionAnswers(String(params?.id));

  return {
    props: { question, answers },
    revalidate: 60,
  };
};

export default QuestionPage;
