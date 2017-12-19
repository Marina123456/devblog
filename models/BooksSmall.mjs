import mongoose from 'mongoose';
import {Schema} from './Schema';

var BooksSmallSchema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true }
});

export let BooksSmall = mongoose.model('BooksSmall', BooksSmallSchema);
