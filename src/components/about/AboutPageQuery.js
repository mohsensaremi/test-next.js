import {graphql} from "react-relay";

export default graphql`
    query AboutPageQuery {
        layout: pageLayoutById(id:"home") {
            images {
                ...Page_data
                url
            }
        }
    }
`;
