import React from 'react';
import {QueryRenderer, ReactRelayContext} from 'react-relay';
import {getEnvironment} from "./environment";
import {relayFetchedQueries} from "./getRelayInitialProps";
import {createOperationDescriptor, getRequest} from "relay-runtime";

export const AppRelayQueryRenderer = (props) => {

    const environment = getEnvironment();

    if (relayFetchedQueries.find(x => x === props.query.params.cacheID)) {

        const query = getRequest(props.query);
        if (query.params.operationKind !== 'query') {
            throw new Error('fetchQuery: Expected query operation');
        }
        const operation = createOperationDescriptor(query, props.variables || {});
        const rendererProps = environment.lookup(operation.fragment).data;

        if (rendererProps) {
            return (
                <ReactRelayContext.Provider
                    value={{environment, variables: {}}}
                >
                    {
                        props.render({
                            error: null,
                            retry: null,
                            props: rendererProps,
                        })
                    }
                </ReactRelayContext.Provider>
            );
        }
    }

    return (
        <QueryRenderer
            environment={environment}
            {...props}
        />
    );
}