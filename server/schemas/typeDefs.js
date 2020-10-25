// import the gql tagged template function
const { gql } = require("apollo-server-express");

  
const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Book {
    _id: ID
    author: String
    descrioption: String
    title: String
    image: String
    link: String
  }
  type User {
    _id: ID
    username: String
    email: String
    bookcount: Int
    savedBooks: [Book]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      authors: [String]!
      description: String!
      title: String!
      bookId: String!
      image: String!
      link: String!
    ): User
    removeBook(bookId: String!): User
  }
  type Auth {
    token: ID!
    user: User
  }
`;


// export the typeDefs
module.exports = typeDefs;
