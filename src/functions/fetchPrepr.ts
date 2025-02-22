import type { TypedDocumentNode } from "@graphql-typed-document-node/core";

const url = import.meta.env.PREPR_URL_PREVIEW ?? import.meta.env.PREPR_URL;

// TODO: can we type the query string further?
// TODO: can we type the response further?
export const fetchPrepr = async (query: TypedDocumentNode): Promise<any> => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query.loc?.source.body,
    }),
  });

  const { data, errors } = await response.json();

  if (errors) {
    console.dir(errors, { depth: null });
    throw new Error("Failed to fetch data from Prepr");
  }

  return data;
};
