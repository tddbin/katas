import {stringToSlug} from './slug';

export default class GroupedMetaData {
  static to(data) {
    const ret = prefillMetaData(data.name);
    const groups = data.groups;
    for (let groupName in groups) {
      ret.groups[groupName] = oneGroupsData(groups[groupName].items, groupName);
    }
    return ret;
  }
}

const prefillMetaData = (name) =>
  ({
    name: name,
    nameSlug: stringToSlug(name),
    groups: {}
  });

const oneGroupsData = (groupItems, groupName) => {
  const items = itemsFromGroup(groupItems, groupName);
  const slug = stringToSlug(groupName);
  return {items, slug, name: groupName};
};

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
