export function forGroupName(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g , '-')
  ;
}