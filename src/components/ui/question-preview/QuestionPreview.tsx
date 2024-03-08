import { FC } from "react";
import styles from "./QuestionPreview.module.scss";
import { IQuestionData } from "@/interfaces/Question.interface";
import Image from "next/image";
import Tag from "../tag/Tag";
import Link from "next/link";

const QuestionPreview: FC<IQuestionData> = ({ question }) => {
  return (
    <div className={styles.body}>
      <Image
        className={styles.avatar}
        src={question.owner.profile_image}
        alt={"Avatar"}
        width={50}
        height={50}
      />
      <div className={styles.info}>
        <Link className={styles.info__title} href={`question/${question.question_id}`} dangerouslySetInnerHTML={{ __html: question.title }} />
        <div className={styles.info__text}dangerouslySetInnerHTML={{ __html: question.body }} />
      </div>
      <div className={styles.count}>{question.answer_count}</div>
      <div className={styles.tags}>
        {question.tags.map((tag, index) => {
          if (index < 3) {
            return <Tag key={index}>{tag}</Tag>;
          }
        })}
        {question.tags.length > 3 ? (
          <div>и еще {question.tags.length - 3}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default QuestionPreview;
