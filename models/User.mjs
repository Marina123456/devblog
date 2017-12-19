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

var UserSchema = new Schema({
    user: { type: String, required: true },
    password: { type: String, required: true }
});

export let User = mongoose.model('User', UserSchema);
