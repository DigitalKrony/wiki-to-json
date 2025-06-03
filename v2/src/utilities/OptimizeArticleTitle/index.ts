/*!
 * Copyright (c) 2025 Design:Funedikly. All rights reserved.
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
