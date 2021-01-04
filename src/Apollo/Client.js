import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    isLoggedIn: {
                        read: () => {
                            return Boolean(localStorage.getItem("token")) && true;
                        },
                    },
                },
            },
        },
    }),
    resolvers: {
        Mutation: {
            logUserIn: (_, { token }, { cache }) => {
                localStorage.setItem("token", token);
                cache.writeData({
                    data: {
                        isLoggedIn: true,
                    },
                });
                return null;
            },
            logUserOut: (_, __, { cache }) => {
                localStorage.removeItem("token");
                window.localStorage.reload();
                return null;
            },
        },
    },
});

export default Client;
