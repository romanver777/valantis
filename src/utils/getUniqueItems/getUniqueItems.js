export default function getUniqueItems(data) {
  const map = new Map();

  for (let i = data.length - 1; i >= 0; i--) {
    map.set(data[i].id, data[i]);
  }

  return [...map.values()].reverse();
}
