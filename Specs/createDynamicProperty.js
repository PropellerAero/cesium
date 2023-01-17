import { ConstantProperty } from "@propelleraero/cesiumengine";

function createDynamicProperty(value) {
  const property = new ConstantProperty(value);
  Object.defineProperties(property, {
    isConstant: {
      value: false,
    },
  });
  return property;
}
export default createDynamicProperty;
