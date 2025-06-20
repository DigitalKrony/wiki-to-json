/*!
 * Copyright (c) 2025 Design:Funedikly. All rights reserved.
 */

/*!
  * Converts an article name into a more user-friendly format by replacing underscores with spaces,
  * removing any trailing section after a hash (#), and decoding any URI components.
  * @param {string} articleName - The original article name to be converted.
  * @returns {string} - The user-friendly article name.
  */

import { replaceAll } from "./../replaceAll";

export const friendlyArticleName = (articleName: string): string => {
  const name = replaceAll(articleName, "_", " ").split("#")[0];
  return decodeURI(name);
};
