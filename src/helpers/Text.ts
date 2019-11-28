export function getFirstSymbol(content: string) {
  const trimmed = content.trim();
  const first = content.trim()[0];
  const rest = trimmed.substr(1).trim();
  return {
    first,
    rest
  };
}
