import {Environment, Network, RecordSource, Store} from 'relay-runtime'

export const fetchFn = (operation, variables) => {

    const body = {
        query: operation.text,
        variables,
    };

    return fetch("http://localhost:4000/graphql", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then(response => {
        return response.json()
    }).then(res => new Promise(resolve => {
        setTimeout(() => resolve(res), 3000);
    }));
};

let env = null
export default function initEnvironment(records = {}) {
    if (process.browser && env) {
        return env;
    }
    const store = new Store(new RecordSource(records), {});
    const network = Network.create(fetchFn);
    env = new Environment({
        network,
        store
    });

    return env;
}
