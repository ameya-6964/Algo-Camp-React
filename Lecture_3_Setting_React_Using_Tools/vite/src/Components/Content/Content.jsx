import styles from "./Content.module.css";
const Content = ({ title, bgColor }) => {
  return (
    <div className={styles.main} style={{ backgroundColor: `${bgColor}` }}>
      <h1>{title}</h1>
    </div>
  );
};

export default Content;
