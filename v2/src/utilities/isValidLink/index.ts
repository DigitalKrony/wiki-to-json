/*!
 * Copyright (c) 2025 Design:Funedikly. All rights reserved.
 */

export const isValidLink = (linkHref: string, wikiHost?: string): boolean => {
  const host = wikiHost || "https://en.wikipedia.org";

  if (linkHref.indexOf("/wiki/") == -1) return false;
  if (linkHref.startsWith("http")) {
    // block external links
    if (linkHref.startsWith(`${host}/wiki/`)) return true;
    return false;
  }
  return true;
};
