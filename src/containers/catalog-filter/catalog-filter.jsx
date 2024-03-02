import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelect,
  setSearch,
  setSearchParams,
  resetFilter,
} from "../../store/catalog-filter";
import SideLayout from "../../components/side-layout/side-layout";
import Select from "../../components/select/select";
import Input from "../../components/input/input";

function CatalogFilter() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const select = useSelector((state) => state.catalogFilter.select);
  const search = useSelector((state) => state.catalogFilter.search);

  const callbacks = {
    onSelect: useCallback((value) => dispatch(setSelect(value)), [dispatch]),
    onSearch: useCallback((value) => dispatch(setSearch(value)), [dispatch]),

    onClickSearch: useCallback(() => {
      if (!select || !search) return;
      dispatch(setSearchParams({ select, search, page: 1 }));
    }, [dispatch, search, select]),

    onReset: useCallback(() => {
      if (!select && !search) return;
      dispatch(resetFilter());
      navigate("/");
    }, [dispatch, navigate, search, select]),
  };

  const options = {
    params: useMemo(
      () => [
        { value: "", title: "Выберите фильтр" },
        { value: "brand", title: "Марка" },
        { value: "product", title: "Название" },
        { value: "price", title: "Цена" },
      ],
      []
    ),
  };

  return (
    <SideLayout side="start">
      <Select
        options={options.params}
        value={select}
        onChange={callbacks.onSelect}
      />
      <Input
        type="text"
        value={search}
        onChange={callbacks.onSearch}
        placeholder={"Поиск"}
        onEnterClick={callbacks.onClickSearch}
      />
      <button onClick={callbacks.onClickSearch}>Поиск</button>
      <button onClick={callbacks.onReset}>Сбросить фильтр</button>
    </SideLayout>
  );
}

export default CatalogFilter;
