/* eslint no-param-reassign: ["error", { "props": false }] */
export default function orderByProps(obj, firstKeys) {
  // пуш первых элементов firstKeys
  const firstPartArr = [];
  for (let i = 0; i < firstKeys.length; i += 1) {
    firstPartArr.push({ key: firstKeys[i], value: obj[firstKeys[i]] });
    delete obj[firstKeys[i]];
  }
  // массив из элементов кроме firstkeys
  const secondPartArr = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)
    ) {
      secondPartArr.push({ key, value: obj[key] });
    }
  }
  // сортировка массива без первых firstkeys
  secondPartArr.sort((a, b) => {
    if (a.key > b.key) { return 1; }
    if (a.key < b.key) return -1;
    return 0;
  });

  // merge
  return [...firstPartArr, ...secondPartArr];
}
