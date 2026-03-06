export function calculateRibs(model) {

  const ribs = [];

  let pos = model.offset;
  let index = 0;

  while (pos <= model.wallLength) {

    ribs.push({
      index,
      position: Number(pos.toFixed(4))
    });

    pos += model.ribSpacing;
    index++;
  }

  return ribs;
}
