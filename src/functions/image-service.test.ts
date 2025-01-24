import { describe, it } from "node:test";
import imageService from "./image-service.ts";
import type { AstroConfig, ImageTransform } from "astro";
import { equal } from "node:assert/strict";

const baseURL = new URL("https://katja-isabella.stream.prepr.io");
describe("ImageService", () => {
  it("should convert it to width 200", async () => {
    const url = new URL(baseURL);
    url.pathname = "1kfv3ihkk80f/w_1536/katjaisabella-lowlands1.jpg";

    const options: ImageTransform = {
      src: url.href,
      width: 200,
    };

    const imageConfig: any = {};

    const actual = await imageService.getURL(options, imageConfig);

    const expectedURL = new URL(baseURL);
    expectedURL.pathname = "1kfv3ihkk80f/w_200/katjaisabella-lowlands1.jpg";
    const expected = expectedURL.href;

    equal(actual, expected);
  });

  it("should change the width property in the URL to 200", async () => {
    const url = new URL(baseURL);
    url.pathname = "1kfv3ihkk80f/w_1536/katjaisabella-lowlands1.jpg";

    const options: ImageTransform = {
      src: url.href,
    };

    const imageConfig: any = {};

    const actual = await imageService.getURL(options, imageConfig);
    const expected = url.href;

    equal(actual, expected);
  });
});
