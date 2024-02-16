import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className={styles.list}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default NavBar;
