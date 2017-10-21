const createIndex = require('./create-index');
const createImage = require('./create-image');

const colors = createIndex(3);
console.log(colors);

colors.forEach((color, idx) => {
    const img = createImage(color);
    const filename = `image-${idx}.png`;
    img.write(filename, (err) => {
        if (err) {
            throw err;
        }
        console.log(`Wrote ${filename}`);
    });
});
