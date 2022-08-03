import { gql } from '@apollo/client';
// used activity 23 example to run get request through queries
export const GET_ME = gql`
    query me {
     me{
        _id
        username
        email
        SavedBooks{
            bookId
            authors
            image
            link
            description
            title
}
}
`;


