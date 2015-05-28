export function buildMetaData(all) {
  const items = [];
  const ids = Object.keys(all.items);
  const sortedIds = ids.sort((id1, id2) => parseInt(id1) - parseInt(id2));
  for (let id of sortedIds) {
    let item = JSON.parse(JSON.stringify(all.items[id]));
    item.id = id;
    items.push(item);
  }
  return {items: items};
}