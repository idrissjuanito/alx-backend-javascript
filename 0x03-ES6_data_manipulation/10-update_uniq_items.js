export default function updateUniqueItems(map) {
  const mp = map;
  if (!(map instanceof Map)) throw new Error('Cannot process');
  map.forEach((val, key) => {
    if (val === 1) mp.set(key, 100);
  });
  return mp;
}

import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);
