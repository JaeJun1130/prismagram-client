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
  uri: "http://220.118.32.147:4000/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  cache: cache,
});
