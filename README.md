# koloroj

Handle images based on an index with Amazon SQS & Lambda.

## Synopsis

1. Generate an index where each item is an object with RGB values, e.g.

```
    [
        { r: 50, g: 20, b: 30 },
        { r: 20, g: 65, b: 200 },
        { r: 250, g: 20, b: 40 }
    ]
````

`node src/create-index.js >colors.json`

2. Add the index items into a SQS queue (might be a big number)

3. Process each queue item with a Lambda function that creates an image of it and stores it e.g. in a S3 bucket

