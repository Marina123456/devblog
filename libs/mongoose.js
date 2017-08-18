var mongoose    = require('mongoose');
//var log         = require('./log')(module);


var config = require('./config');
mongoose.connect(config.get('mongoose:uri'));
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error:', err.message);
});
db.once('open', function callback () {
    console.log("Connected to DB!");
});

var Schema = mongoose.Schema;

// Schemas
var Image = new Schema({
    url: { type: String, required: true }
});
var ArticleSmall = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    modified: { type: Date, default: Date.now },
    category:{ type: String, required: true },
});
var Project = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    modified: { type: Date, default: Date.now }
});
let Article = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String},
    modified: { type: Date, default: Date.now },
    message: { type: String, required: true }
});
var ArticleBig = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    modified: { type: Date, default: Date.now },
    category:{ type: String, required: true },
    image:[Image]
});
var BooksSmall = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    image:[Image]
});

let Project = mongoose.model('Project', Project);
module.exports.Project = Project;

let Article = mongoose.model('Article', Project);
module.exports.Article = Article;

var ArticleSmallModel = mongoose.model('ArticleSmall', ArticleSmall);
module.exports.ArticleSmallModel = ArticleSmallModel;

var ArticleBigModel = mongoose.model('ArticleBig', ArticleBig);
module.exports.ArticleBigModel = ArticleBigModel;

var BooksSmallModel = mongoose.model('BooksSmall', BooksSmall);
module.exports.BooksSmallModel = BooksSmallModel;
