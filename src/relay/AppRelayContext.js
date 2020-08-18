import React, {useMemo} from 'react';
import initEnvironment from "./initEnvironment";
import {relayEnvironmentSSR} from "./relaySSRLoad";

export const AppRelayContext = React.createContext({});

export const AppRelayContextProvider = (props) => {

    const {
        children
    } = props;

    const state = useMemo(() => {
        return {
            environment: typeof document === "undefined"
                ? relayEnvironmentSSR
                : initEnvironment(
                    JSON.parse(document.getElementById("__NEXT_DATA__").innerHTML).props.pageProps.env
                ),
        }
    }, []);

    return (
        <AppRelayContext.Provider value={state}>
            {children}
        </AppRelayContext.Provider>
    );
};