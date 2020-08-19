/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Page_data$ref = any;
export type AboutPageQueryVariables = {||};
export type AboutPageQueryResponse = {|
  +layout: ?{|
    +images: $ReadOnlyArray<?{|
      +url: string,
      +$fragmentRefs: Page_data$ref,
    |}>,
    +seoBoxes: ?$ReadOnlyArray<?{|
      +id: string,
      +title: ?string,
      +url: ?string,
    |}>,
  |}
|};
export type AboutPageQuery = {|
  variables: AboutPageQueryVariables,
  response: AboutPageQueryResponse,
|};
*/


/*
query AboutPageQuery {
  layout: pageLayoutById(id: "home") {
    images {
      ...Page_data
      url
      id
    }
    seoBoxes {
      id
      title
      url
    }
    id
  }
}

fragment Page_data on ImageObject {
  url
  photographer
  photographerUrl
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "home"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "PageLayoutSeoBox",
  "kind": "LinkedField",
  "name": "seoBoxes",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AboutPageQuery",
    "selections": [
      {
        "alias": "layout",
        "args": (v0/*: any*/),
        "concreteType": "PageLayout",
        "kind": "LinkedField",
        "name": "pageLayoutById",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageObject",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "Page_data"
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": "pageLayoutById(id:\"home\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AboutPageQuery",
    "selections": [
      {
        "alias": "layout",
        "args": (v0/*: any*/),
        "concreteType": "PageLayout",
        "kind": "LinkedField",
        "name": "pageLayoutById",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageObject",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": [
              (v1/*: any*/),
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
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": "pageLayoutById(id:\"home\")"
      }
    ]
  },
  "params": {
    "cacheID": "69d8474aca463cb25c0aae53ae079d5b",
    "id": null,
    "metadata": {},
    "name": "AboutPageQuery",
    "operationKind": "query",
    "text": "query AboutPageQuery {\n  layout: pageLayoutById(id: \"home\") {\n    images {\n      ...Page_data\n      url\n      id\n    }\n    seoBoxes {\n      id\n      title\n      url\n    }\n    id\n  }\n}\n\nfragment Page_data on ImageObject {\n  url\n  photographer\n  photographerUrl\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c64370f88a87826f5abcf6c45badb4c9';

module.exports = node;
