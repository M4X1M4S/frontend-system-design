const data = [
  {
    name: "Abhilash",
    age: 25,
  },
  {
    name: "Anjali",
    age: 30,
  },
  {
    name: "Ravi",
    age: 28,
  },
  {
    name: "Priya",
    age: 22,
  },
  {
    name: "Suresh",
    age: 35,
  },
];

const sortByAge = () => {
  const sortedData = [...data].sort((a, b) => a.age - b.age);

  return sortedData;
};
module.exports = sortByAge;
