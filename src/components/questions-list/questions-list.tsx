import { FC, useEffect } from "react";
import Layout from "../layout/layout";
import QuestionPreview from "../ui/question-preview/question-preview";
import styles from "./question-list.module.scss";
import { useSelector } from "react-redux";
import { useDispatchedActions } from "@/hooks/useDispatchedActions";
import { IQuestion } from "@/interfaces/question.interface";
import Pagination from "../pagination/pagination";
import { debounce } from "lodash";
import Tag from "../ui/tag/tag";
import { RootState } from "@/types/state";

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
        <div className={styles["sort-tags"]}>
          Сортировать по:
          <Tag type="sort" value="hot">
            Популярности
          </Tag>
          <Tag type="sort" value="activity">
            Последней активности
          </Tag>
          <Tag type="sort" value="votes">
            Голосам
          </Tag>
          <Tag type="sort" value="creation">
            Дате создания
          </Tag>
        </div>
        {loading ? (
          <div>Загрузка...</div>
        ) : (
          <>
            {questions?.length ? (
              <>
                {questions.map((question: IQuestion) => (
                  <QuestionPreview question={question} />
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
