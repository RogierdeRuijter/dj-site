import type { HomepageQuery } from "../graphql/graphql";

export type StackInformationItem = NonNullable<
  NonNullable<
    NonNullable<NonNullable<HomepageQuery["Homepage"]>["information"]>[number]
  >
>;
