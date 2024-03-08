import { IUser } from "./User.interface";
import { IAnswer } from "./Answer.interface";

export interface IQuestion {
  question_id: string;
  tags: string[];
  owner: IUser;
  title: string;
  body: string;
  answer_count: number;
}

export interface IQuestionList {
  question: IQuestion[]
}

export interface IQuestionData {
  question: IQuestion
  answers?: IAnswer[]
}
