import Layout from "@/components/layout/Layout";
import { IQuestionData } from "@/interfaces/Question.interface";
import Head from "next/head";
import { FC } from "react";
import styles from "./QuestionCard.module.scss";
import Image from "next/image";
import Tag from "../tag/Tag";
import AnswerCard from "../answer-card/AnswerCard";

const QuestionCard: FC<IQuestionData> = ({ question, answers }) => {
  return (
    <>
      <Head>
        <title>{question.question_id}</title>
      </Head>
      <Layout>
        <div className={styles.card}>
          <div className={styles.body}>
            <Image
              className={styles.avatar}
              src={question.owner.profile_image}
              alt={"Avatar"}
              width={50}
              height={50}
            />
            <div
              className={styles.header}
              dangerouslySetInnerHTML={{ __html: question.title }}
            />
            <div
              className={styles.questionBody}
              dangerouslySetInnerHTML={{ __html: question.body }}
            />
            <div className={styles.tags}>
              {question.tags.map((tag, index) => {
                if (index < 3) {
                  return <Tag key={index}>{tag}</Tag>;
                }
              })}
            </div>
            <div className={styles.answersCount}>
              Ответы ({question.answer_count})
            </div>
          </div>
          <div className={answers?.length ? styles.answersList : ""}>
            {answers
              ? answers.map((answer) => (
                  <AnswerCard answer={answer} key={answer.answer_id} />
                ))
              : ""}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default QuestionCard;
