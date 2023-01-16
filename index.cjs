/*eslint-env node*/
"use strict";

const path = require("path");

const flavour = ""
// If in 'production' mode, use the combined/minified/optimized version of Cesium
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging" ||
  process.env.NODE_ENV === "dev"
) {
  // eslint-disable-next-line global-require
  module.exports = require(path.join(__dirname, "Build/Cesium/index.cjs"));
} else{
  // eslint-disable-next-line global-require
  module.exports = require(path.join(
    __dirname,
    "Build/CesiumUnminified/index.cjs"
  ));
}

module.exports = require(path.join(__dirname, "Build/Cesium/index.cjs"));