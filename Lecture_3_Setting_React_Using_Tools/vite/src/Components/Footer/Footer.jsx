import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>&copy; All Right Reserved {new Date().toLocaleDateString()}</h3>
    </footer>
  );
};

export default Footer;
