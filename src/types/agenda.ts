import { StackItem } from "./stackItem";

export type Agenda = NonNullable<
  Extract<
  StackItem,
    { __typename: "Agenda" }
  >
>["agenda"];
