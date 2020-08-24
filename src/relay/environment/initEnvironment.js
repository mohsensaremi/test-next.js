import {Environment, Network, RecordSource, Store} from 'relay-runtime'
import {fetchFn} from "./fetchFn";

export default function initEnvironment(records = {}) {
    const store = new Store(new RecordSource(records), {});
    const network = Network.create(fetchFn);
    return new Environment({
        network,
        store
    });
}