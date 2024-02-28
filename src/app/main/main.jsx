import { useCallback } from "react";
import { useLocation } from "react-router";
import {
  useLoadAllQuery,
  useLoadProductsQuery,
  useLoadProductsByIdsQuery,
} from "../../store/catalog";
import getUniqueItems from "../../utils/getUniqueItems/getUniqueItems";
import PageLayout from "../../components/page-layout/page-layout";
import Header from "../../components/header/header";
import Loader from "../../components/loader/loader";
import List from "../../components/list/list";
import ProductItem from "../../components/product-item/product-item";
import Pagination from "../../components/pagination/pagination";

function Main() {
  const { search } = useLocation();

  const getPage = (search) => {
    const urlParams = new URLSearchParams(search);

    return urlParams.has("page") ? Number(urlParams.get("page")) : 1;
  };

  const { data: all } = useLoadAllQuery();

  const {
    data: ids,
    isLoading: isLoadingIds,
    isFetching,
  } = useLoadProductsQuery(getPage(search));
  const {
    data: items,
    isLoading: isLoadingProducts,
    isFetching: isFetchingItems,
  } = useLoadProductsByIdsQuery(ids?.result, {
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

  if (isLoadingIds || isLoadingProducts) return <Loader />;

  return (
    <PageLayout>
      <Header />
      {isFetching || isFetchingItems ? (
        <Loader />
      ) : (
        <>
          <List
            items={getUniqueItems(items.result)}
            renderItem={renders.item}
          />
          <Pagination
            active={getPage(search)}
            limit={50}
            length={all.result.length}
          />
        </>
      )}
    </PageLayout>
  );
}

export default Main;
