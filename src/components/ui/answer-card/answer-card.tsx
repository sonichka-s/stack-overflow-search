import { IAnswerData } from "@/interfaces/answer.interface";
import { FC } from "react";
import styles from "./answer-card.module.scss";
import Image from "next/image";
import { getTextContentOnly } from "../utils/HtmlParser";

const AnswerCard: FC<IAnswerData> = ({ answer }) => {
  return (
    <div className={styles.body}>
      <Image
        className={styles.avatar}
        src={answer.owner.profile_image}
        alt={"Avatar"}
        width={50}
        height={50}
      />
      <div className={styles["answer-body"]}>{getTextContentOnly(answer.body)}</div>
    </div>
  );
};

export default AnswerCard;
