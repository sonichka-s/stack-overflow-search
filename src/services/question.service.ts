import { IAnswer } from "@/interfaces/Answer.interface";
import { IQuestion } from "@/interfaces/Question.interface";
import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;

export const QuestionService = {
  async getAllQuestions(sort?: string, page?: number) {
    const { data } = await axios.get<{ items: IQuestion[] }>("/questions", {
      params: {
        site: "stackoverflow",
        pagesize: 10,
        filter: "!nNPvSNPI7A",
        order: "desc",
        sort: sort,
        ...(page ? { page: page } : {}),
      },
    });

    return data.items;
  },

  async getQuestionById(id: string) {
    const { data } = await axios.get<{ items: IQuestion[] }>(
      `/questions/${id}`,
      {
        params: {
          site: "stackoverflow",
          filter: "!nNPvSNPI7A",
        },
      }
    );

    return data.items[0];
  },

  async getQuestionAnswers(id: string) {
    const { data } = await axios.get<{ items: IAnswer[] }>(
      `/questions/${id}/answers`,
      {
        params: {
          site: "stackoverflow",
          filter: "!nNPvSNdWme",
        },
      }
    );

    return data.items;
  },

  async getSearchedQuestions(searchValue = "", sort: string, page?: number) {
    const { data } = await axios.get<{ items: IQuestion[] }>("/search", {
      params: {
        site: "stackoverflow",
        pagesize: 10,
        intitle: searchValue,
        filter: "!nNPvSNPI7A",
        order: "desc",
        sort: sort,
        ...(page ? { page: page } : {}),
      },
    });

    return data.items;
  },
};
