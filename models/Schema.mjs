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

export {autoIncrement};
export let Schema = mongoose.Schema;
