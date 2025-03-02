import type { StackInformationItem } from "../types/stackInformationItem";

interface ReturnType {
  classList: string[];
  text: string | null | undefined;
}

type TextComponent = NonNullable<
  Extract<StackInformationItem, { __typename: "Tekst" }>
>;

export const mapTextComponent = (textComponent: TextComponent): ReturnType => {
  const { distorted, text } = textComponent;

  return {
    classList: distorted ? ["distorted"] : [],
    text,
  };
};
