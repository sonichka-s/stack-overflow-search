import { IUser } from "./user.interface";

export interface IAnswer {
  answer_id: string;
  owner: IUser;
  title: string;
  body: string;
}

export interface IAnswerData {
  answer: IAnswer
}
