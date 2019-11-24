import {stringToSlug} from './slug';

export default class GroupedMetaData {
  static to(data) {
    const ret = {
      name: data.name,
      nameSlug: stringToSlug(data.name),
      groups: {}
    };
    const groups = data.groups;
    for (let groupName in  groups) {
      const items = itemsFromGroup(groups[groupName].items, groupName);
      const slug = stringToSlug(groupName);
      ret.groups[groupName] = {items, slug, name: groupName};
    }
    return ret;
  }
}

const itemsFromGroup = (items, groupName) => {
  const newItems = [];
  for (let id in items) {
    const item = cloneObject(items[id]);
    item.groupName = groupName;
    item.id = id;
    newItems.push(item);
  }
  return newItems;
};

const cloneObject = obj => JSON.parse(JSON.stringify(obj));
