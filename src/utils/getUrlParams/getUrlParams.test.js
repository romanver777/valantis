import { describe, test, expect } from "vitest";
import getUrlParams from "./getUrlParams";

describe("utils/getUrlParams", () => {
  test("search empty", () => {
    window.location.search = "";
    const limit = 50;
    const params = {
      action: "get_ids",
      params: { offset: 0, limit },
    };

    const result = { params, search: null };

    expect(getUrlParams(limit)).toEqual(result);
  });
});
