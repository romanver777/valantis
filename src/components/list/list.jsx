import style from "./list.module.css";

function List({ items, renderItem }) {
  return (
    <div className={style.List}>
      <ul className={style.List__ul}>
        {items.map((item) => renderItem(item))}
      </ul>
    </div>
  );
}

export default List;
