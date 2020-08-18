import Page from '../src/about/src/renderers/Page';
import query from '../src/about/src/renderers/Page/AboutPageQuery';
import {relaySSRLoad} from "../src/relay/relaySSRLoad";

Page.getInitialProps = async () => {
    const {env, relayResponse} = await relaySSRLoad([
        {
            query,
        }
    ]);

    return {
        relayResponse,
        // env: env.getStore()
        //     .getSource()
        //     .toJSON(),
    };
};

export default Page;