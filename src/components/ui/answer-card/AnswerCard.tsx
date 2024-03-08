import { IAnswerData } from "@/interfaces/Answer.interface";
import { FC } from "react";
import styles from "./AnswerCard.module.scss"
import Image from "next/image";

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
      <div
        className={styles.answerBody}
        dangerouslySetInnerHTML={{ __html: answer.body }}
      />
    </div>
  );
};

export default AnswerCard;
