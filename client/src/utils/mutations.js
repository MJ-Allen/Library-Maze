import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
           _id'
           username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        name
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
  saveBook(bookData: $bookData){
        _id
        username
        email
        bookCount
        SavedBooks{
            bookId
            authors
            image
            link
            description
            title
        }
    }

}
    `;
 
export const REMOVE_BOOK = gql`
    mutation removeBooks($bookId: ID!) {
    removeBook(bookId: $bookID){
        _id
        username
        email
        bookCount
        SavedBooks{
            bookId
            authors
            image
            link
            description
            title
    }
  }
  
  }
`;
// using activity 23 Ins_Stripe to implement mutations and queries