import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { initParams, resetFilter } from "../../store/catalog-filter";
import PageLayout from "../../components/page-layout/page-layout";
import Header from "../../components/header/header";
import CatalogFilter from "../../containers/catalog-filter/catalog-filter";
import CatalogList from "../../containers/catalog-list/catalog-list";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(initParams());
  }, [dispatch]);

  const callbacks = {
    onHome: useCallback(() => {
      dispatch(resetFilter());
      navigate("/");
    }, [dispatch, navigate]),
  };

  return (
    <PageLayout>
      <Header onHomeClick={callbacks.onHome} />
      <CatalogFilter />
      <CatalogList />
    </PageLayout>
  );
}

export default Main;
