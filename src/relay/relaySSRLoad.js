import {fetchQuery} from "react-relay";
import initEnvironment from "./initEnvironment";

export let relayResponse = typeof document === "undefined"
    ? {}
    : JSON.parse(document.getElementById("__NEXT_DATA__").innerHTML).props.pageProps.relayResponse;

const beginSSR = () => {
    relayResponse = {};
    return initEnvironment();
};

export const relaySSRLoad = async (requests) => {
    const env = beginSSR();
    for (let i = 0; i < requests.length; i++) {
        const request = requests[i];
        relayResponse[request.query.params.cacheID] = await fetchQuery(env, request.query, requests.variables, requests.cacheConfig);
    }

    return {env, relayResponse};
}