import type { StackInformationItem } from "./stackInformationItem";

export type Agenda = NonNullable<
  Extract<
  StackInformationItem,
    { __typename: "Agenda" }
  >
>["agenda"];
