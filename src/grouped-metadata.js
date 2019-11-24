import {stringToSlug as slugForGroupName} from './slug';

export default class GroupedMetaData {
  static to(data) {
    let ret = {groups: {}};
    const groups = data.groups;
    for (let groupName in  groups) {
      const items = itemsFromGroup(groups[groupName].items, groupName);
      var slug = slugForGroupName(groupName);
      ret.groups[groupName] = {items, slug, name: groupName};
    }
    return ret;
  }
}

function itemsFromGroup(items, groupName) {
  let newItems = [];
  for (let id in items) {
    const item = cloneObject(items[id]);
    item.groupName = groupName;
    item.id = id;
    newItems.push(item);
  }
  return newItems;
}
function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}