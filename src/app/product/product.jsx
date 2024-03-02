import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { resetFilter } from "../../store/catalog-filter";
import { useLoadProductByIdQuery } from "../../store/product";
import PageLayout from "../../components/page-layout/page-layout";
import Header from "../../components/header/header";
import ProductArticle from "../../components/product-article/product-article";
import Loader from "../../components/loader/loader";

function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useLoadProductByIdQuery(id);

  const callbacks = {
    onHome: useCallback(() => {
      dispatch(resetFilter());
      navigate("/");
    }, [dispatch, navigate]),
  };

  return (
    <PageLayout>
      <Header onHomeClick={callbacks.onHome} />
      {isLoading ? <Loader /> : <ProductArticle item={data.result[0]} />}
    </PageLayout>
  );
}

export default Product;
