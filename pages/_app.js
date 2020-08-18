import React from 'react';
import {AppRelayContextProvider} from "../src/relay/AppRelayContext";

export default function App({Component, pageProps}) {
    return (
        <AppRelayContextProvider>
            <Component {...pageProps} />
        </AppRelayContextProvider>
    )
}
