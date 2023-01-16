/*eslint-env node*/
"use strict";

const path = require("path");

let flavour = "CesiumUnminified";

// If in 'production' mode, use the combined/minified/optimized version of Cesium
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging" ||
  process.env.NODE_ENV === "dev"
) {
  flavour = "Cesium";
}
const p = path.join(__dirname, "Build", flavour, "index.cjs");
module.exports = require(p);
