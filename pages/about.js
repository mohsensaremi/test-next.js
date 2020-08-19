import PageRenderer from '../src/components/about/PageRenderer';
import query from '../src/components/about/AboutPageQuery';
import {getRelayInitialProps} from "../src/relay/getRelayInitialProps";

PageRenderer.getInitialProps = async () => {
    return await getRelayInitialProps([
        {
            query,
        }
    ]);
};

export default PageRenderer;