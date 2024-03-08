import styles from "./Loader.module.scss";

const Loader = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;
  return (
    <div className={styles.wrapper}>
      <div className={styles.item1}></div>
      <div className={styles.item2}></div>
      <div className={styles.item3}></div>
    </div>
  );
};

export default Loader;
