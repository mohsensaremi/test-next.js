import React, {useMemo} from 'react';
import initEnvironment from "./initEnvironment";
import {relayResponse} from "./relaySSRLoad";

export const AppRelayContext = React.createContext({});

export const AppRelayContextProvider = (props) => {

    const {
        children
    } = props;

    const state = useMemo(() => {
        return {
            environment: initEnvironment(
                typeof document === "undefined"
                    ? {}
                    : JSON.parse(document.getElementById("__NEXT_DATA__").innerHTML).props.pageProps.relayResponse
            ),
        }
    }, []);

    return (
        <AppRelayContext.Provider value={state}>
            {children}
        </AppRelayContext.Provider>
    );
};