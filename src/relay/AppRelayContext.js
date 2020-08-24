import React, {useMemo} from 'react';
import initEnvironment from "./initEnvironment";
import {relayEnvironmentSSR} from "./getRelayInitialProps";

export const AppRelayContext = React.createContext({});

export const AppRelayContextProvider = (props) => {

    const {
        children
    } = props;

    const encodedStore = typeof document === "undefined"
        ? undefined
        : JSON.parse(document.getElementById("__NEXT_DATA__").innerHTML).props.pageProps.relayStore

    console.log("AppRelayContextProvider", encodedStore, typeof document === "undefined" ? "undefined" : document.getElementById("__NEXT_DATA__").innerHTML);

    const state = useMemo(() => {
        return {
            environment: typeof document === "undefined"
                ? relayEnvironmentSSR
                : initEnvironment(encodedStore),
        }
    }, [encodedStore]);

    return (
        <AppRelayContext.Provider value={state}>
            {children}
        </AppRelayContext.Provider>
    );
};