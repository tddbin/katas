export default class FlatMetaData {
  static to(data) {
    return buildMetaData(data);
  }
}

function buildMetaData(all) {
  const items = buildItems(extractAllItems(all));
  return {items: items};
}

function extractAllItems(all) {
  const groups = all.groups;
  let extractedItems = {};
  for (let groupName in groups) {
    extractItemsFromGroup(groups, groupName, extractedItems);
  }
  return extractedItems;
}

function extractItemsFromGroup(groups, groupName, addItemsTo) {
  const items = groups[groupName].items;
  for (let key in items) {
    const item = cloneObject(items[key]);
    item.groupName = groupName;
    addItemsTo[key] = item;
  }
}

function buildItems(flattenedItems) {
  const items = [];
  const ids = Object.keys(flattenedItems);
  const sortedIds = ids.sort((id1, id2) => parseInt(id1) - parseInt(id2));
  for (let id of sortedIds) {
    let item = flattenedItems[id];
    item.id = id;
    items.push(item);
  }
  return items;
}

function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}