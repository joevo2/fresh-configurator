const base = require("./jest.base.js");

module.exports = {
  projects: ["<rootDir>/packages/*/jest.config.js"],
  ...base,
};
