import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
