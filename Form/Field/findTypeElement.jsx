export function findTypeElement(array, elementType, type = "type") {
  return Boolean(array.find((child) => child[type] === elementType));
}
