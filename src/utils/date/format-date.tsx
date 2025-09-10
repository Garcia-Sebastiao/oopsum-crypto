import { format } from "date-fns";

/**
 * Converts a date into the format "11 Mar 23".
 * @param date - Date object or a string/number that can be parsed into a Date.
 * @returns formatted date string in "dd MMM yy".
 */
export function formatDate(date: Date | string | number): string {
  const parsedDate = new Date(date);
  return format(parsedDate, "dd MMM yy");
}
