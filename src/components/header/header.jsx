import style from "./header.module.css";

function Header() {
  return (
    <header className={style.Header}>
      <div className={style.Header__container}>
        <h2 className={style.Header__title}>Valantis Jevelry</h2>
      </div>
    </header>
  );
}

export default Header;
