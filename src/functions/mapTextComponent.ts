interface InputType {
  distorted: boolean;
  text: string;
}

interface ReturnType {
  classList: string[];
  text: string;
}

export const mapTextComponent = (textComponent: InputType): ReturnType => {
  const { distorted,  text } = textComponent;

  return {
    classList: distorted ? ["distorted"] : [],
    text,
  };
};
