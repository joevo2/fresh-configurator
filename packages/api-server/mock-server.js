/* eslint-disable import/no-unresolved */
const { createServer } = require("./dist/cjs");

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 9000;
console.log(`starting mock server on ${port}`);
createServer({ mocked: true, playground: true }).listen(port);
