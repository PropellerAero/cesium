import { defaultValue } from "@propelleraero/cesium-engine";
import { Viewer } from "@propelleraero/cesium-widgets";

import getWebGLStub from "./getWebGLStub.js";

function createViewer(container, options) {
  options = defaultValue(options, {});
  options.contextOptions = defaultValue(options.contextOptions, {});
  options.contextOptions.webgl = defaultValue(options.contextOptions.webgl, {});
  if (!!window.webglStub) {
    options.contextOptions.getWebGLStub = getWebGLStub;
  }

  return new Viewer(container, options);
}
export default createViewer;
