const sortByAge = require("./app");

test("sortByAge sorts the data by age in ascending order", () => {
  const resultData = sortByAge();
  expect(resultData[0].name).toBe("Priya");
});
test("sortByAge should not return undefined", () => {
  const resultData = sortByAge();
  expect(resultData).not.toBeUndefined();
});
