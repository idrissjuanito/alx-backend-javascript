export default function hasValuesFromArray(set, arr) {
  let hasAll = true;
  arr.forEach((elm) => {
    hasAll = hasAll ? set.has(elm) : false;
  });
  return hasAll;
}
