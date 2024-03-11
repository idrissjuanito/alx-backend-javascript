export default function updateUniqueItems(map) {
  const mp = map;
  if (!(map instanceof Map)) throw new Error('Cannot process');
  map.forEach((val, key) => {
    if (val === 1) mp[key] = 100;
  });
  return mp;
}
