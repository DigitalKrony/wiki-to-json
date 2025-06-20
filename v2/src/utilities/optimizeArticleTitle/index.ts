/*!
 * Copyright (c) 2025 Design:Funedikly. All rights reserved.
 */

/*!
  * Optimizes an article title by removing specific characters and trimming it.
  * @param {string} articleTitle - The title of the article to be optimized.
  * @return {string} - The optimized article title.
  */

export const optimizeArticleTitle = (articleTitle: string) => {
  const splits: Array<string> = articleTitle.split("#");
  articleTitle = splits[splits.length - 1];
  const badCharacters = ["'", '"', "<", ">"];

  for (let i = 0; i < badCharacters.length; i++) {
    articleTitle = articleTitle.replace(badCharacters[i], "");
  }

  return articleTitle;
};
