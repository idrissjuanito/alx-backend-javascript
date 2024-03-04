export default function appendToEachArrayValue(array, appendString) {
  const arr = array;
  for (const [idx, value] of array) {
    arr[idx] = appendString + value;
  }

  return array;
}
