import Page from '../src/about/src/renderers/Page';
import query from '../src/about/src/renderers/Page/AboutPageQuery';
import {getRelayInitialProps} from "../src/relay/getRelayInitialProps";

Page.getInitialProps = async () => {
    return await getRelayInitialProps([
        {
            query,
        }
    ]);
};

export default Page;