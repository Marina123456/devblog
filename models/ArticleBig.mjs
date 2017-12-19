import mongoose from 'mongoose';
import config from '../db/config';

mongoose.connect(config.get('mongoose:uri'));

    
let db = mongoose.connection;
db.on('error', function (err) {
            console.log('connection error:', err.message);
});
db.once('open', function callback () {
    console.log("Connected to DB!");
});


let Schema = mongoose.Schema;


var ArticleBigSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    modified: { type: Date, default: Date.now },
    category:{ type: String, required: true },
    image:[Image]
});




export let ArticleBigModel = mongoose.model('ArticleBig', ArticleBigSchema);