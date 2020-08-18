import React, {useContext} from 'react';
import {QueryRenderer, ReactRelayContext} from 'react-relay';
import {AppRelayContext} from "./AppRelayContext";
import {relayResponse} from "./relaySSRLoad";

export const AppRelayQueryRenderer = (props) => {

    const {environment} = useContext(AppRelayContext);

    const {
        query,
    } = props;

    console.log(environment.getStore()
        .getSource()
        .toJSON());

    if (relayResponse[query.params.cacheID]) {
        return (
            <ReactRelayContext.Provider
                value={{environment, variables: {}}}
            >
                {
                    props.render({
                        error: null,
                        retry: null,
                        props: relayResponse[query.params.cacheID],
                    })
                }
            </ReactRelayContext.Provider>
        );
    }

    return (
        <QueryRenderer
            environment={environment}
            {...props}
        />
    );
}