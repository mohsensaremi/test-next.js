import {relayEnvironmentSSR} from "../getRelayInitialProps";
import initEnvironment from "./initEnvironment";

export const getStoreFromDOM = () => {
    try {
        return typeof document !== "undefined"
            ? JSON.parse(document.getElementById("__NEXT_DATA__").innerHTML).props.pageProps.relayStore
            : {};
    } catch (e) {
        return {};
    }
}

let cachedEnvironment = null;
export const getEnvironment = (force = false) => {
    if (!force && cachedEnvironment) {
        // If environment already defined
        return cachedEnvironment;
    } else {
        // Init environment
        cachedEnvironment = initEnvironment(getStoreFromDOM());
        return cachedEnvironment;
    }
}