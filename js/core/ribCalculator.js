export function calculateRibs(wall) {

  const {
    length,
    ribSpacing = 12,
    offset = 0
  } = wall;

  const ribs = [];

  let index = 0;
  let position = offset;

  // build ribs across wall
  while (position <= length) {

    ribs.push({
      index,
      position
    });

    index++;
    position = offset + index * ribSpacing;
  }

  return ribs;
}
