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

let ArticleSchema = new Schema({
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

export let Article = mongoose.model('Article', ArticleSchema);