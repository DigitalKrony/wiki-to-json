/*!
 * Copyright (c) 2025 Design:Funedikly. All rights reserved.
 */

import { friendlyArticleName } from "./../friendlyArticleName";

export const superFriendlyArticleName = (articleName: string): string => {
  const name = friendlyArticleName(articleName);

  //articleName = articleName.replace(/ *\([^)]*\) */g, "");
  // Cearful. the above regex removes white spaces before and after the brackets too: "hi (what) there" --> "hithere"

  return name;
};
