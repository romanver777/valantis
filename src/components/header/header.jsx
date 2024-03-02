import { Link } from "react-router-dom";
import style from "./header.module.css";

function Header({ onHomeClick }) {
  const onHandleClick = () => onHomeClick();

  return (
    <header className={style.Header}>
      <div className={style.Header__container}>
        <Link to="/" className={style.Header__title} onClick={onHandleClick}>
          Valantis Jevelry
        </Link>
      </div>
    </header>
  );
}

export default Header;
