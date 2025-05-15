export const data = {
  authors: [
    { id: "1", name: "Khushwant Singh", bookIds: ["101"] },
    { id: "2", name: "Arundhati Roy", bookIds: ["102"] },
    { id: "3", name: "Chetan Bhagat", bookIds: ["103", "104"] },
    { id: "4", name: "J.K. Rowling", bookIds: ["105", "106"] },
    { id: "5", name: "George Orwell", bookIds: ["107"] },
    { id: "6", name: "R.K. Narayan", bookIds: ["108", "109"] },
    { id: "7", name: "Harper Lee", bookIds: ["110"] },
    { id: "8", name: "Amish Tripathi", bookIds: ["111", "112", "113"] },
  ],
  books: [
    {
      id: "101",
      title: "Train to Pakistan",
      publishedYear: 1956,
      authorId: "1",
    },
    {
      id: "102",
      title: "The God of Small Things",
      publishedYear: 1997,
      authorId: "2",
    },
    {
      id: "103",
      title: "Five Point Someone",
      publishedYear: 2004,
      authorId: "3",
    },
    { id: "104", title: "2 States", publishedYear: 2009, authorId: "3" },
    {
      id: "105",
      title: "Harry Potter and the Sorcerer's Stone",
      publishedYear: 1997,
      authorId: "4",
    },
    {
      id: "106",
      title: "Harry Potter and the Deathly Hallows",
      publishedYear: 2007,
      authorId: "4",
    },
    { id: "107", title: "1984", publishedYear: 1949, authorId: "5" },
    { id: "108", title: "Malgudi Days", publishedYear: 1943, authorId: "6" },
    { id: "109", title: "The Guide", publishedYear: 1958, authorId: "6" },
    {
      id: "110",
      title: "To Kill a Mockingbird",
      publishedYear: 1960,
      authorId: "7",
    },
    {
      id: "111",
      title: "The Immortals of Meluha",
      publishedYear: 2010,
      authorId: "8",
    },
    {
      id: "112",
      title: "The Secret of the Nagas",
      publishedYear: 2011,
      authorId: "8",
    },
    {
      id: "113",
      title: "The Oath of the Vayuputras",
      publishedYear: 2013,
      authorId: "8",
    },
  ],
};

export const resolvers = {
  Author: {
    books: (parent, args, context, info) => {
      return data.books.filter((book) => book.authorId === parent.id);
    },
  },
  Book: {
    author: (parent) => {
      return data.authors.find((a) => a.id === parent.authorId);
    },
  },
  Query: {
    books: (parent, args, context, info) => {
      return data.books;
    },
    authors: (parent, args, context, info) => {
      return data.authors;
    },
  },
};
