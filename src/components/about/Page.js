import React from 'react';
import {createFragmentContainer} from 'react-relay';
import {graphql} from "graphql";

const Page = (props) => {

    const {data} = props;

    return (
        <div>
            {`DATA ${JSON.stringify(data)}`}
        </div>
    );
};

export default createFragmentContainer(Page, {
    data: graphql`
        fragment Page_data on ImageObject @relay(plural:true){
            url
            photographer
            photographerUrl
        }
    `
});
