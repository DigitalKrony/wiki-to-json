/*!
 * Copyright (c) 2025 Design:Funedikly. All rights reserved.
 */

import { friendlyArticleName } from "./../friendlyArticleName";

/*! 
 * Compares two article names to determine if they refer to the same article.
 * 
 * @param {string} article1 - The first article name.
 * @param {string} article2 - The second article name.
 * @returns {boolean | undefined} - Returns true if both articles are the same, false otherwise, or undefined if they cannot be compared.
 */

export const sameArticle = (
  article1: string,
  article2: string
): boolean | undefined => {
  let article1Trimmed = article1.toLocaleLowerCase().trim();
  let article2Trimmed = article2.toLocaleLowerCase().trim();

  if (article1Trimmed == article2Trimmed) return true;

  if (
    friendlyArticleName(article1Trimmed) ===
    friendlyArticleName(article2Trimmed)
  )
    return true;
};
