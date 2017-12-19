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

let ImageSchema = new Schema({
    url: { type: String, required: true }
});

export let Image = mongoose.model('Image', ImageSchema);