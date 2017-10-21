const createRgbValue = () => Math.round(Math.random() * 255);
const createColor = () => ({
    r: createRgbValue(),
    g: createRgbValue(),
    b: createRgbValue()
});

const createColors =
    count => Array.from(Array(count), () => createColor());

module.exports = createColors;

if (!module.parent) {
    console.log(createColors(10));
}
