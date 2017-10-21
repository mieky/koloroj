const ApiBuilder = require("claudia-api-builder"),
  api = new ApiBuilder(),
  Jimp = require("jimp"),
  createImage = require("./create-image");

module.exports = api;

// api.setBinaryMediaTypes(['image/*']);

api.get(
  "/color",
  () => {
    "use strict";
    const img = createImage({ r: 75, g: 85, b: 95 });
    return new Promise((resolve, reject) => {
      img.getBuffer(Jimp.MIME_PNG, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
  {
    success: { contentType: "image/png", contentHandling: "CONVERT_TO_BINARY" }
  }
);
