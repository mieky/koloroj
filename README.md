# koloroj

Tests for handling a number of images with Amazon SQS & Lambda.

*koloroj* means "colors" in Esperanto.

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

## Deploying to AWS Lambda

This project uses [claudia](https://github.com/claudiajs/claudia) which makes this pleasantly straightforward.

Prerequisites:
- Node 6
- [aws-cli](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) installed, default credentials configured in ~/.aws.

```
npm install
npm run create
````

This should create you a `claudia.json` and return an API url running your Lambda function.

With YOUR-API-ID replaced by what claudia gave you, accessing the URL in the browser should give you a random small single-color image:

`https://<YOUR-API-ID>.execute-api.eu-west-1.amazonaws.com/latest/color`

You can use the r, g, b query parameters to tweak one or more of the values:

`https://<YOUR-API-ID>.execute-api.eu-west-1.amazonaws.com/latest/color?r=255&g=0&b=255`

## License

MIT
