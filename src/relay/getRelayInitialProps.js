import initEnvironment from "./initEnvironment";
import {fetchQuery} from 'react-relay';

export let relayFetchedQueries = typeof document === "undefined"
    ? []
    : JSON.parse(document.getElementById("__NEXT_DATA__").innerHTML).props.pageProps.relayFetchedQueries;

export let relayEnvironmentSSR = null;

const begin = () => {
    relayFetchedQueries = [];
    relayEnvironmentSSR = initEnvironment();
};

export const getRelayInitialProps = async (requests) => {
    begin();
    const env = relayEnvironmentSSR;
    for (let i = 0; i < requests.length; i++) {
        const request = requests[i];
        await fetchQuery(env, request.query, request.variables || {}, request.cacheConfig || {});
        relayFetchedQueries.push(request.query.params.cacheID)
    }

    return {
        relayFetchedQueries,
        relayStore: env.getStore()
            .getSource()
            .toJSON(),
    };
}