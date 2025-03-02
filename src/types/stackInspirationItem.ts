import type { HomepageQuery } from "../graphql/graphql";

export type StackInspirationItem = NonNullable<
  NonNullable<
    NonNullable<NonNullable<HomepageQuery["Homepage"]>["inspiration"]>[number]
  >
>;
