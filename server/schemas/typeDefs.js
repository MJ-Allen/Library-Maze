const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: String!
    authors: [String]
    description: String
    image: String
    link: String
    title: String
    }


  type Auth {
    token: ID!
    profile: User
  }

  input BookInput {
    authors: [String]
    description: String!
    image: String
    bookId: String
    link: String
    title: String
   
  }
  type Query {
    me: User
    }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook: (bookId: ID!): User
 
  }
`;

module.exports = typeDefs;
