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

let Schema = mongoose.Schema;

var BooksSmallSchema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    image:[Image]
});

export let BooksSmall = mongoose.model('BooksSmall', BooksSmallSchema);
