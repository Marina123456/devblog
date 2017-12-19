import mongoose from 'mongoose';
import {Schema} from './Schema';


var ArticleSmallSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    modified: { type: Date, default: Date.now },
    category:{ type: String, required: true },
});

export let ArticleSmall = mongoose.model('ArticleSmall', ArticleSmallSchema);