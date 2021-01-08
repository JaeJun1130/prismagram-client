import { gql } from "@apollo/client";

export const LOG_IN = gql`
    mutation requestSecret($email: String!) {
        requestSecret(email: $email)
    }
`;

export const CREATE_ACCOUNT = gql`
    mutation createAccount(
        $username: String!
        $email: String!
        $firstName: String!
        $lastName: String!
    ) {
        createAccount(
            username: $username
            email: $email
            firstName: $firstName
            lastName: $lastName
        )
    }
`;

export const CONFIRM_SECERT = gql`
    mutation confirmSecret($email: String!, $secret: String!) {
        confirmSecret(email: $email, secret: $secret)
    }
`;
