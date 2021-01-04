const query = gql`
    query MyTodoAppQuery {
        todos {
            id
            text
            completed
        }
    }
`;

// Get the current to-do list
const data = client.readQuery({ query });

// Create a new to-do item
const myNewTodo = {
    id: "6",
    text: "Start using Apollo Client.",
    completed: false,
    __typename: "Todo",
};

// Write back to the to-do list, appending the new item
client.writeQuery({
    query,
    data: {
        todos: [...data.todos, myNewTodo],
    },
});
