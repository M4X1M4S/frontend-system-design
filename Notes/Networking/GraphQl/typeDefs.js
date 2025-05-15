export const typeDefs = `#graphQl
        type Book {
        id: ID!
        title: String!
        published: String
        author: Author!
        }

        type Author{
        id: ID!
        name:String!
        books: [Book]!
        }
        type Query {
        books: [Book]
        authors: [Author]
        }
        
`;
