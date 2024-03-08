import { FC, PropsWithChildren } from "react";
import styles from "./Tag.module.scss";
import { useDispatchedActions } from "@/hooks/useDispatchedActions";
import { useSelector } from "react-redux";
import { RootState } from "@/types/Redux.type";

type Props = {
  type?: string;
  value?: string;
};

const Tag: FC<PropsWithChildren<Props>> = ({
  children,
  type = "default",
  value,
}: {
  children?: React.ReactNode;
  type?: string;
  value?: string;
}) => {
  const actions = useDispatchedActions();

  const { sort } = useSelector((state: RootState) => state.questions);

  const onSortTypeChange = (value: string) => {
    actions.setSortType(value);
  };

  return (
    <>
      <div
        className={
          type === "sort"
            ? `${styles.sort} ${sort === value ? styles.sort__current : ""}`
            : styles.body
        }
        onClick={value ? () => onSortTypeChange(value) : () => {}}
      >
        {children}
      </div>
    </>
  );
};

export default Tag;
