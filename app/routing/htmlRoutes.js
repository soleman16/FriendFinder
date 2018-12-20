var path = require("path");
var questions = require("../data/questions");
var Handlebars = require('handlebars');

module.exports = (app) =>{
    app.get("/survey", (req, res) =>{
        res.render("survey", { questions: questions });
    });

    app.use((req, res) =>{
        res.render("home", { });
    });
}

/**
 * Increments a value by 1
 */
Handlebars.registerHelper("increment", function(value, options)
{
    return parseInt(value) + 1;
});