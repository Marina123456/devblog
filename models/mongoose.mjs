import mongoose from 'mongoose';
import config from '../db/config';
import autoIncrement from 'mongoose-auto-increment';

mongoose.connect(config.get('mongoose:uri'));

    
let db = mongoose.connection;
db.on('error', function (err) {
            console.log('connection error:', err.message);
});
db.once('open', function callback () {
    console.log("Connected to DB!");
});

autoIncrement.initialize(db);


let Schema = mongoose.Schema;

// Schemas
var Image = new Schema({
    url: { type: String, required: true }
});
var ArticleSmallSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    modified: { type: Date, default: Date.now },
    category:{ type: String, required: true },
});
var ProjectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    modified: { type: Date, default: Date.now }
});


var ArticleBigSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    modified: { type: Date, default: Date.now },
    category:{ type: String, required: true },
    image:[Image]
});
var BooksSmallSchema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    image:[Image]
});
var UserSchema = new Schema({
    user: { type: String, required: true },
    password: { type: String, required: true }
});
export let Project = mongoose.model('Project', ProjectSchema);





export let User = mongoose.model('User', UserSchema);


export let ArticleSmallModel = mongoose.model('ArticleSmall', ArticleSmallSchema);


export let ArticleBigModel = mongoose.model('ArticleBig', ArticleBigSchema);


export let BooksSmallModel = mongoose.model('BooksSmall', BooksSmallSchema);
