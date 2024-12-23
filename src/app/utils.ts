/**
 * Utilities functions
 */

import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(LocalizedFormat)


/**
 * Predefined date and time format patterns
 * @see https://day.js.org/docs/en/display/format
 */
export const DATETIME_FORMATS = {
    "s-date": "MMM D",                    // Aug 16
    "date": "ll",                         // Aug 16, 2018
    "l-date": "LL",                       // August 16, 2018
    "datetime": "MMM D, YYYY h:mm:ss A",  // Aug 16, 2018 8:02:30 PM
    "sdatetime": "lll",                   // Aug 16, 2018 8:02 PM
    "l-datetime": "LLL",                  // August 16, 2018 8:02 PM
    "fulldatetime": "llll",              // Thursday, August 16, 2018 8:02 PM
    "l-fulldatetime": "LLLL",            // Thursday, August 16, 2018 8:02 PM
    "time": "LT",                         // 8:02 PM
    "fulltime": "LTS",                    // 8:02:18 PM
  } as const;
  
// Type for the format parameter
export type DateTimeFormat = keyof typeof DATETIME_FORMATS | string;

/**
 * Formats a date timestamp into a human-readable string
 * 
 * Examples
 * formatDate(new Date(), 'date')          // => "Aug 16, 2018"
 * formatDate('2024-01-01', 's-date')      // => "Jan 1"
 * formatDate(1640995200000, 'time')       // => "8:02 PM"
 * 
 * // Using custom format
 * formatDate(new Date(), 'YYYY-MM-DD')    // => "2024-01-01"
 * 
 * // Handling invalid inputs
 * formatDate(null)                        // => null
 * formatDate('invalid-date')              // => null
 */
  export function formatDate(
    timestamp: string | number | Date | null | undefined,
    format: DateTimeFormat = 'date'
  ): string | null {
    if (!timestamp) {
      return null;
    }
  
    try {
      const formatPattern = DATETIME_FORMATS[format as keyof typeof DATETIME_FORMATS] || format;
      const date = dayjs(timestamp);
      return date.isValid() ? date.format(formatPattern) : null;
    } catch (error) {
      console.error('Error formatting date:', error);
      return null;
    }
  }
  
  // Optional: Add validation function if needed
  export function isValidDate(timestamp: any): boolean {
    return dayjs(timestamp).isValid();
  }