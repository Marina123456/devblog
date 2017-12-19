import {Schema, autoIncrement} from './Schema';

let ArticleSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String},
    user_key: {type: String},
    modified: { type: Date, default: Date.now },
    message: { type: String, required: true }
});

ArticleSchema.plugin(autoIncrement.plugin, 'Article');
ArticleSchema.plugin(autoIncrement.plugin, { 
    model: 'Article', 
    field: 'articleId', 
    startAt: 1,
    incrementBy: 1
});

export let Article = mongoose.model('Article', ArticleSchema);