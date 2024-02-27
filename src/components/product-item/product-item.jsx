import { Link } from "react-router-dom";
import style from "./product-item.module.css";

function ProductItem({ item, link }) {
  return (
    <li className={style.ProductItem}>
      <div className={style.ProductItem__id}>{item.id}</div>
      {item.brand && (
        <div className={style.ProductItem__brand}>{item.brand}</div>
      )}
      <Link to={link} className={style.ProductItem__link}>
        {item.product}
      </Link>
      <div className={style.ProductItem__price}>
        <div>{item.price} &#8381;</div>
      </div>
    </li>
  );
}

export default ProductItem;
