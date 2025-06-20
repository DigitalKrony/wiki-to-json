/*!
 * Copyright (c) 2025 Design:Funedikly. All rights reserved.
 */

/**
 * Created by Tomer on 26/11/2016.
 */

var wikiUtils = {
    optimizeArticleTitle: (articleTitle) => {
        var splits = articleTitle.split("#");
        articleTitle = splits[splits.length - 1];
        var badCharacters = ['\'', '\"', '<', '>'];
        for (var i = 0; i < badCharacters.length; i++) {
            articleTitle = articleTitle.replace(badCharacters[i], '');
        }
        return articleTitle;
    },
    isValidLink: (linkHref) => {
        if (linkHref.indexOf("/wiki/") == -1) return false;
        if (linkHref.startsWith("http")) {
            // block external links
            if (linkHref.startsWith("https://en.wikipedia.org/wiki/")) return true;
            return false;
        }
        return true;
    },
    friendlyArticleName: (articleName) => {
        articleName = replaceAll(articleName, '_', ' ').split('#')[0];
        return decodeURI(articleName);
    },
    superFriendlyArticleName: (articleName) => {
        articleName = friendlyArticleName(articleName);
        //articleName = articleName.replace(/ *\([^)]*\) */g, "");
        // Cearful. the above regex removes white spaces before and after the brackets too: "hi (what) there" --> "hithere"
        return articleName;
    },
    unfriendlyArticleName: (articleName) => {
        articleName = replaceAll(articleName, ' ', '_');
        return articleName;
    },
    equals: (article1, article2) => {
        var article1Trimmed = article1.toLocaleLowerCase().trim(), article2Trimmed = article2.toLocaleLowerCase().trim();
        if (article1Trimmed == article2Trimmed) return true;
        if (friendlyArticleName(article1Trimmed) == friendlyArticleName(article2Trimmed)) return true;

        return false;
    },
    replaceAll: (target, search, replacement) => {
        return target.split(search).join(replacement);
    }
}

module.exports = wikiUtils;
