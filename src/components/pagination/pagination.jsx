import { Link } from "react-router-dom";
import style from "./pagination.module.css";

function Pagination({ active, limit, length, onChange }) {
  if (length <= limit) return null;

  const max = Math.ceil(length / limit);

  let left = Math.max(active - 1, 1);
  let right = Math.min(left + 2, max);
  left = Math.max(right - 2, 1);

  let items = [];

  if (left > 1) items.push(1);
  if (left > 2) items.push(null);

  for (let page = left; page <= right; page++) items.push(page);

  if (right < max - 1) items.push(null);
  if (right < max) items.push(max);

  const onClickHandler = (number) => (e) => {
    e.preventDefault();
    onChange(number);
  };

  return (
    <div className={style.Pagination}>
      {items.map((number, ind) => {
        return number ? (
          number !== active ? (
            <Link
              to={`?page=${number}`}
              key={ind}
              className={style.Pagination__page}
              onClick={onClickHandler(number)}
            >
              {number}
            </Link>
          ) : (
            <span
              key={ind}
              className={
                style.Pagination__page + " " + style.Pagination__page_active
              }
            >
              {number}
            </span>
          )
        ) : (
          "..."
        );
      })}
    </div>
  );
}

export default Pagination;
