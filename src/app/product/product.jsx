import { useParams } from "react-router-dom";
import { useLoadProductByIdQuery } from "../../store/product";
import PageLayout from "../../components/page-layout/page-layout";
import Header from "../../components/header/header";
import ProductArticle from "../../components/product-article/product-article";
import Loader from "../../components/loader/loader";

function Product() {
  const { id } = useParams();
  const { data, isLoading } = useLoadProductByIdQuery(id);

  return (
    <PageLayout>
      <Header />
      {isLoading ? <Loader /> : <ProductArticle item={data.result[0]} />}
    </PageLayout>
  );
}

export default Product;
