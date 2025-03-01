import type { HomepageQuery } from "../graphql/graphql";

export type StackItem = NonNullable<
  NonNullable<
    NonNullable<NonNullable<HomepageQuery["Homepage"]>["information"]>[number]
  >
>;
