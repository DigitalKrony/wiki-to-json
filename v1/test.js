/*!
 * Copyright (c) 2025 Design:Funedikly. All rights reserved.
 */


var wikipediaParser = require('./WikipediaParser');
wikipediaParser.fetchArticleElements("United States").then(function (result) {
    console.log(result);

}).catch(function (error) {
    console.log(error);
});