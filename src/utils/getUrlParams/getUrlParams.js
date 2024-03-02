import capitalizeFirstLetter from "../capitalizeFirstLetter/capitalizeFirstLetter";

export default function getUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);

  const validParams = { search: {} };

  if (urlParams.has("page")) {
    validParams.page = Number(urlParams.get("page"));
  } else {
    validParams.page = 1;
  }
  if (urlParams.has("price")) {
    validParams.search["select"] = "price";
    validParams.search["search"] = Number(urlParams.get("price"));
  }
  if (urlParams.has("brand")) {
    validParams.search["select"] = "brand";
    validParams.search["search"] = capitalizeFirstLetter(
      urlParams.get("brand")
    );
  }
  if (urlParams.has("product")) {
    validParams.search["select"] = "product";
    validParams.search["search"] = urlParams.get("product");
  }

  return validParams;
}
