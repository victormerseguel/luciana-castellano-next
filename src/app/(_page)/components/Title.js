import styles from "./Title.module.css";

const Title = ({ text }) => {
  return (
    <div className={styles.container}>
      <h2>{text}</h2>
      <img src="/assets/line-title.svg" alt="" />
    </div>
  );
};

export default Title;
