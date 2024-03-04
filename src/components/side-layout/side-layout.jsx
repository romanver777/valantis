import style from "./side-layout.module.css";

function SideLayout({ children, side, pt }) {
  const newStyle =
    style.SideLayout +
    " " +
    style[`SideLayout__side_${side}`] +
    " " +
    style[`SideLayout__pt_${pt}`];

  return <div className={newStyle}>{children}</div>;
}

export default SideLayout;
