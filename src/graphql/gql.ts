/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query Homepage {\n    Homepage {\n      _id\n      information {\n        __typename\n        ... on Spotify {\n          _id\n          spotify {\n            _id\n            url\n          }\n        }\n        ... on Soundcloud {\n          _id\n          soundcloud {\n            _id\n            url\n          }\n        }\n        ... on Tekst {\n          _id\n          distorted\n          text\n        }\n        ... on Image {\n          _id\n          image {\n            url\n            width\n            height\n          }\n        }\n        ... on Agenda {\n          agenda {\n            date\n            brand_name\n            location\n            ticket_url\n            label\n          }\n        }\n      }\n      inspiration {\n        __typename\n      }\n      information_background_color\n      information_text_color\n      inspiration_background_color\n      inspiration_text_color\n    }\n  }\n": typeof types.HomepageDocument,
};
const documents: Documents = {
    "\n  query Homepage {\n    Homepage {\n      _id\n      information {\n        __typename\n        ... on Spotify {\n          _id\n          spotify {\n            _id\n            url\n          }\n        }\n        ... on Soundcloud {\n          _id\n          soundcloud {\n            _id\n            url\n          }\n        }\n        ... on Tekst {\n          _id\n          distorted\n          text\n        }\n        ... on Image {\n          _id\n          image {\n            url\n            width\n            height\n          }\n        }\n        ... on Agenda {\n          agenda {\n            date\n            brand_name\n            location\n            ticket_url\n            label\n          }\n        }\n      }\n      inspiration {\n        __typename\n      }\n      information_background_color\n      information_text_color\n      inspiration_background_color\n      inspiration_text_color\n    }\n  }\n": types.HomepageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Homepage {\n    Homepage {\n      _id\n      information {\n        __typename\n        ... on Spotify {\n          _id\n          spotify {\n            _id\n            url\n          }\n        }\n        ... on Soundcloud {\n          _id\n          soundcloud {\n            _id\n            url\n          }\n        }\n        ... on Tekst {\n          _id\n          distorted\n          text\n        }\n        ... on Image {\n          _id\n          image {\n            url\n            width\n            height\n          }\n        }\n        ... on Agenda {\n          agenda {\n            date\n            brand_name\n            location\n            ticket_url\n            label\n          }\n        }\n      }\n      inspiration {\n        __typename\n      }\n      information_background_color\n      information_text_color\n      inspiration_background_color\n      inspiration_text_color\n    }\n  }\n"): typeof import('./graphql').HomepageDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
