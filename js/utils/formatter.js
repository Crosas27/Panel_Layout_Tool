export function formatToField(inches) {

  const precision = 8; // 1/8" precision

  const totalInches = inches;

  const feet = Math.floor(totalInches / 12);
  const remainingInches = totalInches % 12;

  let wholeInches = Math.floor(remainingInches);
  let fractional = remainingInches - wholeInches;

  // Round to nearest 1/8
  let eighths = Math.round(fractional * precision);

  // Handle rollover like 11 8/8"
  if (eighths === precision) {
    eighths = 0;
    wholeInches += 1;
  }

  // Handle inch rollover like 12"
  let finalFeet = feet;
  let finalInches = wholeInches;

  if (finalInches === 12) {
    finalFeet += 1;
    finalInches = 0;
  }

  // Reduce fraction
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
