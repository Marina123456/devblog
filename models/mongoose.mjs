import mongoose from 'mongoose';
import config from '../db/config';

mongoose.connect(config.get('mongoose:uri'));

import autoIncrement from 'mongoose-auto-increment';
    
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


export let Article = mongoose.model('Article', ArticleSchema);


export let User = mongoose.model('User', UserSchema);


export let ArticleSmallModel = mongoose.model('ArticleSmall', ArticleSmallSchema);


export let ArticleBigModel = mongoose.model('ArticleBig', ArticleBigSchema);


export let BooksSmallModel = mongoose.model('BooksSmall', BooksSmallSchema);

