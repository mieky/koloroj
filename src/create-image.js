const Jimp = require('jimp');

/**
 * Create a simple image with given color and size.
 *
 * @param {*} opts Object with r, g, b, size
 * @return Jimp Image object
 */
function createColorImage(opts) {
    const {
        r = 128,
        g = 128,
        b = 128,
        size = 400
    } = opts;

    const hexColor = Jimp.rgbaToInt(r, g, b, 255);
    return new Jimp(size, size, hexColor)
}

module.exports = createColorImage;