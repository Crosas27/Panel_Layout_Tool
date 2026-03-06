export function formatToField(inches) {

  const precision = 8;

  const totalInches = inches;

  const feet = Math.floor(totalInches / 12);
  const remainingInches = totalInches % 12;

  const wholeInches = Math.floor(remainingInches);
  let fractional = remainingInches - wholeInches;

  let eighths = Math.round(fractional * precision);

  if (eighths === precision) {
    eighths = 0;
    wholeInches += 1;
  }

  let finalFeet = feet;
  let finalInches = wholeInches;

  if (finalInches === 12) {
    finalFeet += 1;
    finalInches = 0;
  }

  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }

  let fractionStr = "";

  if (eighths > 0) {
    const divisor = gcd(eighths, precision);
    const num = eighths / divisor;
    const den = precision / divisor;
    fractionStr = ` ${num}/${den}`;
  }

  return `${finalFeet}' ${finalInches}${fractionStr}"`;
}
