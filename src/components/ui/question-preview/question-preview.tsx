import { FC } from "react";
import styles from "./question-preview.module.scss";
import { IQuestionData } from "@/interfaces/question.interface";
import Image from "next/image";
import Tag from "../tag/tag";
import Link from "next/link";
import { getTextContentOnly } from "../utils/HtmlParser";

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
        <Link className={styles["info__title"]} href={`question/${question.question_id}`}>{getTextContentOnly(question.title)}</Link>
        <div className={styles["info__text"]}>{getTextContentOnly(question.body)}</div>
      </div>
      <div className={styles.count}>{question.answer_count}</div>
      <div className={styles.tags}>
        {question.tags.map((tag, index) => {
          if (index < 3) {
            return <Tag>{tag}</Tag>;
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
