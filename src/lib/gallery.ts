export function albumDate(album: { date: string; endDate: string | null }) {
  const start = new Date(`${album.date}T12:00:00Z`);
  const format = (date: Date) => date.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
  if (!album.endDate) return format(start);
  const end = new Date(`${album.endDate}T12:00:00Z`);
  return start.getUTCMonth() === end.getUTCMonth()
    ? `${format(start)}–${end.getUTCDate()}`
    : `${format(start)} – ${format(end)}`;
}
