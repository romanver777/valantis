import { useCallback } from "react";
import {
  useLoadProductsQuery,
  useLoadProductsByIdsQuery,
} from "../../store/catalog";
import getUniqueItems from "../../utils/getUniqueItems/getUniqueItems";
import PageLayout from "../../components/page-layout/page-layout";
import Header from "../../components/header/header";
import Loader from "../../components/loader/loader";
import List from "../../components/list/list";
import ProductItem from "../../components/product-item/product-item";

function Main() {
  const { data: ids } = useLoadProductsQuery();
  const { data: items } = useLoadProductsByIdsQuery(ids?.result, {
    skip: !ids,
  });

  const renders = {
    item: useCallback(
      (item) => (
        <ProductItem key={item.id} item={item} link={`/products/${item.id}`} />
      ),
      []
    ),
  };

  return (
    <PageLayout>
      <Header />
      {!items ? (
        <Loader />
      ) : (
        <List items={getUniqueItems(items.result)} renderItem={renders.item} />
      )}
    </PageLayout>
  );
}

export default Main;
