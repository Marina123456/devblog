import mongoose from 'mongoose';
import {Schema} from './Schema';


let ImageSchema = new Schema({
    url: { type: String, required: true }
});

export let Image = mongoose.model('Image', ImageSchema);