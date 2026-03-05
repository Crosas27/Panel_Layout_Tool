export function calculateRibs(wall) {

  const ribs = [];

  const length = wall.length;
  const spacing = wall.ribSpacing;
  const offset = wall.offset;

  let position = offset;
  let index = 0;

  while (position <= length) {

    ribs.push({
      index: index,
      position: parseFloat(position.toFixed(4))
    });

    position += spacing;
    index++;

  }

  return ribs;

}