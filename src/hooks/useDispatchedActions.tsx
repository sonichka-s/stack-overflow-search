import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as questionsActions from "@/store/questions/questions.actions";
import { questionsSlice } from "@/store/questions/questions.slice";

const actionCreators = {
  ...questionsActions,
  ...questionsSlice.actions,
};

export const useDispatchedActions = () => {
  const dispatch = useDispatch();   

  return useMemo(
    () => bindActionCreators(actionCreators, dispatch),
    [dispatch]
  );
};
