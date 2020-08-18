import {getRequest, createOperationDescriptor} from 'relay-runtime'
import initEnvironment from "./initEnvironment";

export let relayResponse = typeof document === "undefined"
    ? []
    : JSON.parse(document.getElementById("__NEXT_DATA__").innerHTML).props.pageProps.relayResponse;

export let relayEnvironmentSSR = null;

const beginSSR = () => {
    relayResponse = [];
    relayEnvironmentSSR = initEnvironment();
};

export const relaySSRLoad = async (requests) => {
    beginSSR();
    const env = relayEnvironmentSSR;
    for (let i = 0; i < requests.length; i++) {
        const request = requests[i];

        const query = getRequest(request.query);

        if (query.params.operationKind !== 'query') {
            throw new Error('fetchQuery: Expected query operation');
        }

        const operation = createOperationDescriptor(request.query, request.variables || {});
        await env.execute({
            operation: operation,
            cacheConfig: request.cacheConfig || {}
        }).toPromise();
        relayResponse.push(request.query.params.cacheID)
    }

    return {env, relayResponse};
}