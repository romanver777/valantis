import { createSlice } from "@reduxjs/toolkit";
import getUrlParams from "../utils/getUrlParams/getUrlParams";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter/capitalizeFirstLetter";

const initialState = {
  select: "",
  search: "",
  params: {},
  limit: 50,
  page: 1,
};

const catalogFilterSlice = createSlice({
  name: "catalog-filter",
  initialState,
  reducers: {
    initParams: (state) => {
      const { page, search } = getUrlParams();
      const params = {
        params: {},
      };

      state.page = page;

      if (search.select) {
        params.action = "filter";
        params.params[`${search.select}`] = search.search;

        state.select = search.select;
        state.search = search.search;
        state.params = params;
        return;
      }

      params.action = "get_ids";
      params.params = {
        offset: (page - 1) * state.limit,
        limit: state.limit,
      };

      state.params = params;
    },
    setPage: (state, action) => {
      let urlParams;

      state.page = action.payload;

      if (state.params.action === "get_ids") {
        state.params = {
          ...state.params,
          params: {
            offset: (action.payload - 1) * state.limit,
            limit: state.limit,
          },
        };

        urlParams = `page=${action.payload}`;
      } else {
        urlParams = `${state.select}=${state.search}&page=${action.payload}`;
      }

      let urlSearch = new URLSearchParams(urlParams).toString();
      const url = window.location.pathname + "?" + urlSearch;

      window.history.pushState({}, "", url);
    },
    setSearchParams: (state, action) => {
      const { select, search, page } = action.payload;

      const params = {
        action: "filter",
        params: {},
      };

      if (select === "price") {
        params.params.price = Number(search);
      } else if (select === "brand") {
        params.params.brand = capitalizeFirstLetter(search);
      } else {
        params.params[`${select}`] = search;
      }

      state.page = page;
      state.params = params;

      const urlParams = `${select}=${encodeURIComponent(search)}`;

      let urlSearch = new URLSearchParams(urlParams).toString();
      const url = window.location.pathname + "?" + urlSearch;

      window.history.pushState({}, "", url);
    },
    setSelect: (state, action) => {
      state.select = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    resetFilter: (state) => {
      state.select = "";
      state.search = "";
      state.page = 1;
      state.params = {
        action: "get_ids",
        params: { offset: 0, limit: state.limit },
      };
    },
  },
});

export const {
  initParams,
  setPage,
  setSearchParams,
  setParams,
  setSelect,
  setSearch,
  resetFilter,
} = catalogFilterSlice.actions;

export default catalogFilterSlice.reducer;
