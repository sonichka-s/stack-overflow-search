import { FC, useEffect } from "react";
import Layout from "../layout/Layout";
import QuestionPreview from "../ui/question-preview/QuestionPreview";
import styles from "./QuestionsList.module.scss";
import { useSelector } from "react-redux";
import { useDispatchedActions } from "@/hooks/useDispatchedActions";
import { IQuestion } from "@/interfaces/Question.interface";
import Pagination from "../pagination/Pagination";
import { debounce } from "lodash";
import Tag from "../ui/tag/Tag";
import Loader from "../ui/loader/Loader";
import { RootState } from "@/types/Redux.type";

const QuestionList: FC = () => {
  const actions = useDispatchedActions();

  const { loading, questions, currentPage, searchValue, sort } = useSelector(
    (state: RootState) => state.questions
  );

  useEffect(() => {
    searchValue ? actions.getSearchedQuestions() : actions.getAllQuestions();
  }, [currentPage, sort]);

  const debounceSearch = debounce((searchValue) => {
    actions.setCurrentPage(1);

    if (searchValue) actions.getSearchedQuestions();
    else actions.getAllQuestions();
  }, 2000);

  const onSearchValue = (searchValue: string) => {
    actions.setSearchValue(searchValue);
    debounceSearch(searchValue);
  };

  return (
    <Layout>
      <div className={styles.body}>
        <input
          className={styles.search}
          value={searchValue}
          placeholder={"Найти..."}
          onChange={(e) => onSearchValue(e.target.value)}
        />
        <div className={styles.sortTags}>
          Сортировать по:
          <Tag type="sort" value="activity">
            последней активности
          </Tag>
          <Tag type="sort" value="votes">
            голосам
          </Tag>
          <Tag type="sort" value="creation">
            дате создания
          </Tag>
        </div>
        {loading ? (
          <Loader isLoading={loading} />
        ) : (
          <>
            {questions?.length ? (
              <>
                {questions.map((question: IQuestion) => (
                  <QuestionPreview
                    question={question}
                    key={question.question_id}
                  />
                ))}
                <Pagination currentPage={currentPage} />
              </>
            ) : (
              <div>Ничего не найдено</div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default QuestionList;
