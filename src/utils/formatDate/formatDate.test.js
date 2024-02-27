import { describe, test, expect } from "vitest";
import formatDate from "./formatDate";

describe("utils/formatDate", () => {

  test("month < 10", () => {
    const data = new Date("2024-02-27");
    const result = "20240227";

    expect(formatDate(data)).toEqual(result);
  });
  
  test("day < 10", () => {
    const data = new Date("2024-12-01");
    const result = "20241201";

    expect(formatDate(data)).toEqual(result);
  });
});
