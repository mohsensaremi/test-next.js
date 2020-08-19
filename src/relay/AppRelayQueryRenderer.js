import React, {useContext} from 'react';
import {QueryRenderer, ReactRelayContext} from 'react-relay';
import {AppRelayContext} from "./AppRelayContext";
import {relayFetchedQueries} from "./getRelayInitialProps";
import {createOperationDescriptor, getRequest} from "relay-runtime";

export const AppRelayQueryRenderer = (props) => {

    const {environment} = useContext(AppRelayContext);

    const query = getRequest(props.query);

    if (query.params.operationKind !== 'query') {
        throw new Error('fetchQuery: Expected query operation');
    }

    const operation = createOperationDescriptor(query, props.variables || {});

    if (relayFetchedQueries.find(x => x === query.params.cacheID)) {
        return (
            <ReactRelayContext.Provider
                value={{environment, variables: {}}}
            >
                {
                    props.render({
                        error: null,
                        retry: null,
                        props: environment.lookup(operation.fragment).data,
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