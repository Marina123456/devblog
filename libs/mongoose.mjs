import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.get('mongoose:uri'));

var autoIncrement = require('mongoose-auto-increment');
    
var db = mongoose.connection;
autoIncrement.initialize(db);
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
var ArticleSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String},
    user_key: {type: String},
    modified: { type: Date, default: Date.now },
    message: { type: String, required: true }
});
ArticleSchema.plugin(autoIncrement.plugin, 'Article');
ArticleSchema.plugin(autoIncrement.plugin, { 
    model: 'Article', 
    field: 'articleId', 
    startAt: 1,
    incrementBy: 1
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
var User = new Schema({
    user: { type: String, required: true },
    password: { type: String, required: true }
});
var Project = mongoose.model('Project', Project);
export default {Project};

let Article = mongoose.model('Article', ArticleSchema);
export default {Article};

var User = mongoose.model('User', User);
export default {User};

var ArticleSmallModel = mongoose.model('ArticleSmall', ArticleSmall);
export default {ArticleSmallModel};

var ArticleBigModel = mongoose.model('ArticleBig', ArticleBig);
export default {ArticleBigModel};

var BooksSmallModel = mongoose.model('BooksSmall', BooksSmall);
export default {BooksSmallModel};
