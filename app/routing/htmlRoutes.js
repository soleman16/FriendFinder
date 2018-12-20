var path = require("path");
var questions = require("../data/questions");
var Handlebars = require('handlebars');

module.exports = (app) =>{
    app.get("/survey", (req, res) =>{
        res.render("index", { questions: questions });
    });

    app.use((req, res) =>{
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}

/**
 * Increments a value by 1
 */
Handlebars.registerHelper("increment", function(value, options)
{
    return parseInt(value) + 1;
});