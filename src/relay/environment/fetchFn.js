export const fetchFn = (operation, variables) => {

    // const body = {
    //     query: operation.text,
    //     variables,
    // };
    //
    // return fetch("http://localhost:4000/graphql", {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(body),
    // }).then(response => {
    //     return response.json()
    // });

    return Promise.resolve({
        "data": {
            "layout": {
                "images": [{
                    "url": "https://www.google.com/",
                    "photographer": "",
                    "photographerUrl": "",
                    "id": "SW1hZ2VPYmplY3Q6NWYzN2FlMTBhY2JhNzAxMzI2NWFmZTlh"
                }],
            }
        }
    });
};