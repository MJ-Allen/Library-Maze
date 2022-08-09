import { gql } from '@apollo/client';
// used activity 23 example to run get request through queries
export const GET_ME = gql`
 {
     me {
        _id
        username
        email
        bookCount
        savedBooks{
            bookId
            authors
            description
            title
            image
            link
            
        }
    }
}
`;


