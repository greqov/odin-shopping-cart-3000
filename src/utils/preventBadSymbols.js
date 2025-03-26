export function preventBadSymbols(e) {
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
}
