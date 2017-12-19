import mongoose from 'mongoose';
import {Schema} from './Schema';

let ProjectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    modified: { type: Date, default: Date.now }
});

export let Project = mongoose.model('Project', ProjectSchema);