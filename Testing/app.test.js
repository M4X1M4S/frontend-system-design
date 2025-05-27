console.log("✅ Test file is running");
import { test, expect } from "@jest/globals";
import { sortByAge, data } from "./app.js";

test("sortByAge sorts the data by age in ascending order", () => {
  const resultData = sortByAge(data);
  console.log(resultData);
  expect(resultData[0].name).toBe("Priya");
});
