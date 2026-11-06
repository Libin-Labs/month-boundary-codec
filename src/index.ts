function utcCalendarDate(year: number, month: number, day: number): Date {
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  return date;
}
export interface MonthBoundary {
  readonly start: string;
  readonly end: string;
}
export function monthBoundaries(isoDate: string): MonthBoundary {
  if (typeof isoDate !== 'string') throw new TypeError('Expected date text');
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!m) throw new RangeError('Expected YYYY-MM-DD');
  const year = Number(m[1]),
    month = Number(m[2]),
    day = Number(m[3]);
  const date = utcCalendarDate(year, month, day);
  if (
    year < 1 ||
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  )
    throw new RangeError('Invalid date');
  const mm = m[2]!;
  const last = utcCalendarDate(year, month + 1, 0).getUTCDate();
  return {
    start: m[1] + '-' + mm + '-01',
    end: m[1] + '-' + mm + '-' + String(last).padStart(2, '0'),
  };
}
