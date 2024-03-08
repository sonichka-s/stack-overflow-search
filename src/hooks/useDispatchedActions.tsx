import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as questionsActions from "@/store/questions/Questions.actions";
import { questionsSlice } from "@/store/questions/Questions.slice";
import { AppDispatch } from "@/types/Redux.type";

const actionCreators = {
  ...questionsActions,
  ...questionsSlice.actions,
};

export const useDispatchedActions = () => {
  const dispatch = useDispatch<AppDispatch>();   

  return useMemo(
    () => bindActionCreators(actionCreators, dispatch),
    [dispatch]
  );
};
