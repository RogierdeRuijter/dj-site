import { describe, it } from 'node:test';
import { mapTextComponent } from './mapTextComponent.ts';
import { deepEqual } from 'node:assert/strict';

describe("mapTextComponent", () => {
  it("should map distored to classList if it set to true", () =>{
    const textComponent = {
      distorted: true,
      text: "mijn text",
    };

    const actual = mapTextComponent(textComponent);

    const expected = {
      classList: ["distorted"],
      text: "mijn text",
    };

    deepEqual(actual, expected);
  });

  it("should map to an empty list if distorted is false", () =>{
    const textComponent = {
      distorted: false,
      text: "mijn text",
    };

    const actual = mapTextComponent(textComponent);

    const expected = {
      classList: [],
      text: "mijn text",
    };

    deepEqual(actual, expected);
  });
});
