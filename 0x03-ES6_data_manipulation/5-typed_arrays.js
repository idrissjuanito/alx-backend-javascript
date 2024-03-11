export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  const typedArr = new Int8Array(buffer);
  typedArr[position] = value;
  return view;
}
