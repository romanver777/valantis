import style from "./product-article.module.css";

function ProductArticle({ item }) {
  return (
    <div className={style.ProductArticle}>
      <div className={style.ProductArticle__id}>{item.id}</div>
      {item.brand && (
        <div className={style.ProductArticle__brand}>{item.brand}</div>
      )}
      <div className={style.ProductArticle__prod}>
        {item.product}
      </div>
      <div className={style.ProductArticle__price}>
        <div>{item.price} &#8381;</div>
      </div>
    </div>
  );
}

export default ProductArticle;
