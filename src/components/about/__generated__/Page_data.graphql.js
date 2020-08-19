/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Page_data$ref: FragmentReference;
declare export opaque type Page_data$fragmentType: Page_data$ref;
export type Page_data = $ReadOnlyArray<{|
  +url: string,
  +photographer: string,
  +photographerUrl: string,
  +$refType: Page_data$ref,
|}>;
export type Page_data$data = Page_data;
export type Page_data$key = $ReadOnlyArray<{
  +$data?: Page_data$data,
  +$fragmentRefs: Page_data$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Page_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "photographer",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "photographerUrl",
      "storageKey": null
    }
  ],
  "type": "ImageObject",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '4179a091d42cf59046ad70efe2633c7d';

module.exports = node;
