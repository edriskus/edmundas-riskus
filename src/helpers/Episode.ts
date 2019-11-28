export const heightMultiplier = 2;

export function episodeHeight(start: string, end?: string): number {
  const startTime = new Date(start).getTime();
  const endTime = end ? new Date(end).getTime() : Date.now();
  return ((endTime - startTime) / (1000 * 60 * 60 * 24)) * heightMultiplier;
}

export function eventPosition(
  timestamp: string,
  start: string,
  end?: string
): number {
  const startTime = new Date(start).getTime();
  const endTime = end ? new Date(end).getTime() : Date.now();
  const stampTime = new Date(timestamp).getTime();
  return (
    (Math.pow((endTime - stampTime) / (1000 * 60 * 60 * 24), 2) /
      ((endTime - startTime) / (1000 * 60 * 60 * 24))) *
    heightMultiplier
  );
}
