import type { StackInspirationItem } from "./stackInspirationItem";

export type Highlighted = NonNullable<
  Extract<StackInspirationItem, { __typename: "Highlighted" }>
>
