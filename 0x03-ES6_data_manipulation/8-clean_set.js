export default function cleanSet(set, startString) {
  if (startString.length === 0 || !(set instanceof Set)) return '';
  const str = [];
  set.forEach((elm) => {
    if (elm.startsWith(startString) && elm.length > startString.length) {
      str.push(elm.slice(startString.length));
    }
  });
  return str.join('-');
}
