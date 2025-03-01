import { StackItem } from "../types/stackItem";

interface ReturnType {
  classList: string[];
  text: string;
}

type TextComponent = NonNullable<
  Extract<StackItem, { __typename: "Tekst" }>
>;

export const mapTextComponent = (textComponent: TextComponent): ReturnType => {
  const { distorted, text } = textComponent;

  return {
    classList: distorted ? ["distorted"] : [],
    text,
  };
};
