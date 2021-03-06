/*eslint-env node*/
"use strict";

const path = require("path");

// If in 'production' mode, use the combined/minified/optimized version of Cesium
// PROPELLER HACK: Use minified code in all deployed lambda environments for compactness
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging" ||
  process.env.NODE_ENV === "dev"
) {
  module.exports = require(path.join(__dirname, "Build/Cesium/Cesium"));
  return;
}

module.exports = require(path.join(__dirname, "Build/CesiumUnminified/Cesium"));
