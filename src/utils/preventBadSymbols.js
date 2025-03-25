export default function preventBadSymbols(e) {
  // prevent typing 'e', 'E', '+', '-', '.'
  if (
    [69, 190, 189, 187].includes(e.keyCode) ||
    e.key === 'e' ||
    e.key === 'E' ||
    e.key === '+' ||
    e.key === '-' ||
    e.key === '.'
  ) {
    e.preventDefault();
  }

  // prevent typing 0 at the start
  // convert value to number and boolean with scary !+
  if ((e.keyCode === 48 || e.key === '0') && !+e.target.value) {
    e.preventDefault();
  }
}
