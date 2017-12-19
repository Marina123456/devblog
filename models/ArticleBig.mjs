import mongoose from 'mongoose';
import {Schema} from './Schema';

var ArticleBigSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    modified: { type: Date, default: Date.now },
    category:{ type: String, required: true },
    image:[Image]
});

export let ArticleBigModel = mongoose.model('ArticleBig', ArticleBigSchema);