import { createSlice } from "@reduxjs/toolkit";
import { getAllQuestions, getSearchedQuestions } from "./Questions.actions";
import { IQuestion } from "@/interfaces/Question.interface";

export const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    loading: false,
    error: null,
    questions: [] as IQuestion[],
    currentPage: 1,
    searchValue: "",
    sort: "activity",
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllQuestions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.questions = action.payload as IQuestion[];
    });
    builder.addCase(getAllQuestions.rejected, (state) => {
      state.loading = false;
      state.questions = [];
    });
    builder.addCase(getSearchedQuestions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSearchedQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.questions = action.payload as IQuestion[];
    });
    builder.addCase(getSearchedQuestions.rejected, (state) => {
      state.loading = false;
      state.questions = [];
    });
  },
});
