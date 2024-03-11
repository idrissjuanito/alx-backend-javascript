export default function cleanSet(set, startString) {
  const str = [];
  set.forEach((elm) => {
    if (elm.startsWith(startString)) {
      str.push(elm.slice(startString.length));
    }
  });
  return str.join('-');
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
