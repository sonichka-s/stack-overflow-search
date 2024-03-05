import { QuestionService } from "@/services/question.service";
import { RootState } from "@/types/state";
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
        state.questions.sort,
        state.questions.searchValue,
        state.questions.currentPage
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  }
);
