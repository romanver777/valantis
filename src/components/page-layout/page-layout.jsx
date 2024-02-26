import style from "./page-layout.module.css";

function PageLayout({ children }) {
  return <div className={style.PageLayout}>{children}</div>;
}

export default PageLayout;
