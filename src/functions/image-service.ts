import type { AstroConfig, ExternalImageService, ImageTransform } from "astro";
import { default as sharpService } from "astro/assets/services/sharp";

const preprImageService: ExternalImageService = {
  ...sharpService,
  async getURL(
    options: ImageTransform,
    imageConfig: AstroConfig["image"],
  ): Promise<string> {
    const src = typeof options.src === "string" ? options.src : options.src.src;
    const url = new URL(src);

    if (url.host.includes("katja-isabella.stream.prepr.io")) {
      if (options.width) {
        const pathnames = url.pathname.split("/");
        pathnames[2] = `w_${options.width}`;
        url.pathname = pathnames.join("/");
      }

      return url.href;
    } else {
      return await sharpService.getURL(options, imageConfig);
    }
  },
};

/* This default export is needed because astro consumes it in that way */
export default preprImageService;
