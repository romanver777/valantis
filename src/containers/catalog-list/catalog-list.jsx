import { useCallback, useEffect, useState } from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import {
  useLoadAllQuery,
  useLoadProductsQuery,
  useLoadProductsByIdsQuery,
} from "../../store/catalog";
import { setPage } from "../../store/catalog-filter";
import getUniqueItems from "../../utils/getUniqueItems/getUniqueItems";
import Loader from "../../components/loader/loader";
import List from "../../components/list/list";
import ProductItem from "../../components/product-item/product-item";
import Pagination from "../../components/pagination/pagination";
import SideLayout from "../../components/side-layout/side-layout";

function CatalogList() {
  const dispatch = useDispatch();
  const [existedParams, setExistedParams] = useState(skipToken);
  const [length, setLength] = useState(0);

  const page = useSelector((state) => state.catalogFilter.page);
  const limit = useSelector((state) => state.catalogFilter.limit);
  const params = useSelector((state) => state.catalogFilter.params);

  useEffect(() => {
    if (params?.action) setExistedParams(params);
  }, [params, page]);

  const {
    data: all,
    isLoading: isLoadingAll,
    error: errorAll,
  } = useLoadAllQuery(undefined, {
    skip: existedParams === skipToken || existedParams?.action === "filter",
  });

  const {
    data: ids,
    isLoading: isLoadingIds,
    isFetching,
    error: errorIds,
  } = useLoadProductsQuery(existedParams);

  const {
    data: items,
    isLoading: isLoadingProducts,
    isFetching: isFetchingItems,
    error: errorProducts,
  } = useLoadProductsByIdsQuery(
    params?.action === "filter"
      ? ids?.result.slice((page - 1) * limit, limit * page)
      : ids?.result,
    {
      skip: !ids,
    }
  );

  useEffect(() => {
    if (params?.action === "filter" && ids?.result.length) {
      setLength(ids.result.length);
    }
  }, [params, ids]);

  const callbacks = {
    onPaginate: useCallback((page) => dispatch(setPage(page)), [dispatch]),
  };

  const renders = {
    item: useCallback(
      (item) => (
        <ProductItem key={item.id} item={item} link={`/products/${item.id}`} />
      ),
      []
    ),
  };

  if (isLoadingAll || isLoadingIds || isLoadingProducts) return <Loader />;
  if (errorAll || errorIds || errorProducts)
    return <SideLayout side="center">Что-то пошло не так</SideLayout>;
  if (!ids?.result.length)
    return <SideLayout side="center">Данные не найдены</SideLayout>;

  return (
    <>
      {isFetching || isFetchingItems ? (
        <Loader />
      ) : (
        <>
          <List
            items={getUniqueItems(items?.result || [])}
            renderItem={renders.item}
          />
          <Pagination
            active={page}
            limit={limit}
            length={params?.action === "get_ids" ? all?.result.length : length}
            onChange={callbacks.onPaginate}
          />
        </>
      )}
    </>
  );
}

export default CatalogList;
