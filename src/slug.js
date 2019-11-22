export function stringToSlug(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g , '-')
    .replace(/\W+/g , '-')
  ;
}