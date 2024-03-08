import { QuestionService } from "@/services/Question.service";
import { RootState } from "@/types/Redux.type";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllQuestions = createAsyncThunk(
  "questions/all",
  async (_, { getState }) => {
    try {
      const state = getState() as RootState;
      const response = await QuestionService.getAllQuestions(
        state.questions.sort,
        state.questions.currentPage
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  }
);

export const getSearchedQuestions = createAsyncThunk(
  "questions/search",
  async (_, { getState }) => {
    try {
      const state = getState() as RootState;
      const response = await QuestionService.getSearchedQuestions(
        state.questions.searchValue,
        state.questions.sort,
        state.questions.currentPage
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  }
);
