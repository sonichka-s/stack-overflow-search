import Layout from "@/components/layout/layout";
import { IQuestionData } from "@/interfaces/question.interface";
import Head from "next/head";
import { FC } from "react";
import styles from "./question-card.module.scss";
import Image from "next/image";
import Tag from "../tag/tag";
import AnswerCard from "../answer-card/answer-card";
import { IAnswer } from "@/interfaces/answer.interface";
import { getTextContentOnly } from "../utils/HtmlParser";

const QuestionCard: FC<IQuestionData> = ({ question, answers }) => {
  return (
    <>
      <Head>
        <title>{question.question_id}</title>
      </Head>
      <Layout>
        <div className={styles.body}>
          <Image
            className={styles.avatar}
            src={question.owner.profile_image}
            alt={"Avatar"}
            width={50}
            height={50}
          />
          <div className={styles.header}>{question.title}</div>
          <div className={styles["question-body"]}>{getTextContentOnly(question.body)}</div>
          <div className={styles.tags}>
            {question.tags.map((tag, index) => {
              if (index < 3) {
                return <Tag>{tag}</Tag>;
              }
            })}
          </div>
          <div className={styles["answer-count"]}>
            Ответы ({question.answer_count})
          </div>
          {answers
            ? answers.map((answer) => <AnswerCard answer={answer} />)
            : ""}
        </div>
      </Layout>
    </>
  );
};

export default QuestionCard;
