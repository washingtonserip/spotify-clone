// eslint-disable-next-line import/prefer-default-export
export function normalizeString(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/gi, '');
}
