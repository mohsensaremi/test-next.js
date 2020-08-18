import React from 'react';
import query from './AboutPageQuery';
import PageContainer from '../../containers/Page';
import {AppRelayQueryRenderer} from "../../../../relay/AppRelayQueryRenderer";

const Page = (props) => {

    const {
        ...otherProps
    } = props;


    return (
        <AppRelayQueryRenderer
            query={query}
            render={(xx) => {
                const {props, error, retry} = xx;
                if (error) {
                    return (
                        <div>
                            error
                        </div>
                    );
                } else if (props) {
                    console.log("propsprops", props.layout.images);
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

export default Page;
