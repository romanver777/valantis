import style from "./side-layout.module.css";

function SideLayout({ children, side }) {
  const newStyle = style.SideLayout + " " + style[`SideLayout__side_${side}`];

  return <div className={newStyle}>{children}</div>;
}

export default SideLayout;
