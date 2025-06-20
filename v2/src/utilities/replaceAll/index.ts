/*!
 * Copyright (c) 2025 Design:Funedikly. All rights reserved.
 */

/*!
 * Replaces all occurrences of a substring in a string with a new substring.
 * @param {string} target - The original string in which to replace occurrences.
 * @param {string} search - The substring to search for in the original string.
 * @param {string} replacement - The substring to replace the found occurrences with.
 * @returns {string} - The modified string with all occurrences replaced.
 */

export const replaceAll = (
  target: string,
  search: string,
  replacement: string
): string => {
  return target.split(search).join(replacement);
};
