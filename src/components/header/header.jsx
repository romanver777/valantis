import { Link } from "react-router-dom";
import style from "./header.module.css";

function Header() {
  return (
    <header className={style.Header}>
      <div className={style.Header__container}>
        <Link to="/" className={style.Header__title}>
          Valantis Jevelry
        </Link>
      </div>
    </header>
  );
}

export default Header;
