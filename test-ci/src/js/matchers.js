export default function sortByHealth(heroes) {
  return heroes.sort((a, b) => {
    if (a.health < b.health) return 1;
    return -1;
  });
}
