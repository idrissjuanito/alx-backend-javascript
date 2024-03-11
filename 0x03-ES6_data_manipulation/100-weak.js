const weakMap = new WeakMap();
function queryAPI(obj) {
  const count = weakMap.has(obj) ? (weakMap.get(obj) + 1) : 1;
  if (count >= 5) throw new Error('Endpoint load is high.');
  weakMap.set(obj, count);
}

export { weakMap, queryAPI };
