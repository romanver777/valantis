import style from "./filters.module.css";

function Filters({ children }) {
  return <div className={style.Filters}>{children}</div>;
}

export default Filters;
