import { FC } from "react";
import styles from "./Pagination.module.scss";
import { useDispatchedActions } from "@/hooks/useDispatchedActions";

const Pagination: FC<{ currentPage: number }> = ({ currentPage }) => {
  const maxPageNumber = 25; // due to api documentation

  const { setCurrentPage } = useDispatchedActions();

  const onPageChange = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    setCurrentPage(parseInt(target.innerHTML));
  };

  return (
    <div className={styles.row}>
      {currentPage > 2 ? (
        <div className={styles.item} onClick={onPageChange}>
          1
        </div>
      ) : (
        ""
      )}
      {currentPage > 3 ? <div>...</div> : ""}
      {currentPage > 1 ? (
        <div className={styles.item} onClick={onPageChange}>
          {currentPage - 1}
        </div>
      ) : (
        ""
      )}
      <div className={`${styles.item__current}`} onClick={onPageChange}>
        {currentPage}
      </div>
      {currentPage < maxPageNumber ? (
        <div className={styles.item} onClick={onPageChange}>
          {currentPage + 1}
        </div>
      ) : (
        ""
      )}
      {currentPage < maxPageNumber - 2 ? <div>...</div> : ""}
      {currentPage < maxPageNumber - 1 ? (
        <div className={styles.item} onClick={onPageChange}>
          {maxPageNumber}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
