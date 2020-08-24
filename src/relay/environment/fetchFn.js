export const fetchFn = (operation, variables) => {

    const body = {
        query: operation.text,
        variables,
    };

    return fetch("http://localhost:3000/api/graphql", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then(response => {
        return response.json()
    });
};