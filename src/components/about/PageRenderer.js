import React from 'react';
import query from './AboutPageQuery';
import PageContainer from './Page';
import {AppRelayQueryRenderer} from "../../relay/AppRelayQueryRenderer";

const PageRenderer = (props) => {

    const {
        ...otherProps
    } = props;


    return (
        <AppRelayQueryRenderer
            query={query}
            render={({props, error}) => {
                if (error) {
                    return (
                        <div>
                            error
                        </div>
                    );
                } else if (props) {
                    return (
                        <PageContainer
                            {...otherProps}
                            {...(props)}
                            data={props.layout.images}
                        />
                    );
                } else {
                    return (
                        <div>
                            loading....
                        </div>
                    );
                }
            }}
        />
    );
};

export default PageRenderer;
