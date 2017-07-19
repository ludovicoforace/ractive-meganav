export function targetNotContained(ele) {
  let event = ele.event.original,
    node = ele.event.node;
  return !node.contains(event.relatedTarget);
}
