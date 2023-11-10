function getElementWidth(content, padding, border) {
  const getElementWidth =
    Number.parseFloat(content) +
    Number.parseFloat(padding) * 2 +
    Number.parseFloat(border) * 2;
  return getElementWidth;
}
