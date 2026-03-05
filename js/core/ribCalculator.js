export function calculateRibs(wall) {

  const ribs = [];

  const spacing = wall.ribSpacing;
  const offset = wall.offset || 0;
  const length = wall.length;

  let position = offset;
  let index = 0;

  while (position <= length) {

    ribs.push({
      index: index,
      position: Number(position.toFixed(4))
    });

    position += spacing;
    index++;
  }

  return ribs;
}
