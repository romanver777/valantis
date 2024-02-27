import { describe, test, expect } from "vitest";
import getUniqueItems from "./getUniqueItems";

describe("utils/getUniqueItems", () => {
  const data = [
    { id: "1", name: "aa" },
    { id: "2", name: "bb" },
    { id: "2", name: "wqesfsdf" },
    { id: "3", name: "cc" },
    { id: "4", name: "dd" },
    { id: "5", name: "ee" },
    { id: "3", name: "asddsfsf" },
    { id: "2", name: "sdsgsgds" },
  ];

  const result = [
    { id: "1", name: "aa" },
    { id: "2", name: "bb" },
    { id: "3", name: "cc" },
    { id: "4", name: "dd" },
    { id: "5", name: "ee" },
  ];

  const uniq = getUniqueItems(data);

  test("uniq array length equal result array length", () => {
    expect(uniq.length).toEqual(result.length);
  });
  test("each of objects in result array are unique", () => {
    for (let it of uniq) {
      expect(uniq.filter((el) => el.id === it.id).length).toEqual(1);
    }
  });
  test("the first one is taken from the same elements", () => {
    expect(uniq.filter(el => el.id === "2")[0].name).toEqual("bb");
    expect(uniq.filter(el => el.id === "3")[0].name).toEqual("cc");
  });
});
