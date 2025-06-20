/*!
 * Copyright (c) 2025 Design:Funedikly. All rights reserved.
 */

import { replaceAll } from "./../replaceAll";

/*!
  * Converts an article name into a less user-friendly format by replacing spaces with underscores.
  * @param {string} articleName - The original article name to be converted.
  * @returns {string} - The unfriendly article name.
  */

export const unfriendlyArticleName = (articleName: string): string => {
  articleName = replaceAll(articleName, " ", "_");
  return articleName;
};
