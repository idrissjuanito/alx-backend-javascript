export default function cleanSet(set, startString) {
  const str = [];
  set.forEach((elm) => {
    if (elm.startsWith(startString)) {
      str.append(elm.slice(startString.length));
    }
  });
  return str.join('-');
}
