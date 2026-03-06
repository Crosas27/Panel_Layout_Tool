// ribCalculator.js
// Generates rib positions across the wall

export function calculateRibs(model) {

  const ribs = [];

  const wallLength = model.wallLength;
  const spacing = model.ribSpacing;
  const offset = model.offset || 0;

  if (!spacing || spacing <= 0) {
    model.ribs = ribs;
    return;
  }

  let position = offset;
  let index = 0;

  while (position <= wallLength) {

    ribs.push({
      index: index,
      position: parseFloat(position.toFixed(4))
    });

    position += spacing;
    index++;
  }

  model.ribs = ribs;
}
