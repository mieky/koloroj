const ApiBuilder = require("claudia-api-builder"),
  api = new ApiBuilder(),
  Jimp = require("jimp"),
  createImage = require("./src/create-image");

module.exports = api;

// This apparently forces claudia to have API Gateway respond with a binary no
// matter which Accept headers the client sends -> can send images directly to
// browser unlike it says in
api.setBinaryMediaTypes(["*/*"]);

const createRgbValue = () => Math.round(Math.random() * 255);
const createColor = () => ({
  r: createRgbValue(),
  g: createRgbValue(),
  b: createRgbValue()
});

api.get(
  "/color",
  request => {
    const defaultColor = createColor();
    const colors = {
      r: parseInt(request.queryString.r || defaultColor.r, 10),
      g: parseInt(request.queryString.g || defaultColor.g, 10),
      b: parseInt(request.queryString.b || defaultColor.b, 10)
    };

    const img = createImage(colors);
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
