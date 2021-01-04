import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isLoggedIn: {
                    read: () => {
                        const token = Boolean(localStorage.getItem("token")) && true;
                        console.log(token);

                        return token;
                    },
                },
            },
        },
    },
});

export const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: cache,
});
