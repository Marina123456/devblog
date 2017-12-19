'use strict';
import {Article} from '../../models/Article';

export default async r=>{
let image = '/blog.png';
if (r.body.image) image = r.body.image; 	
    let article = new Article({
        name: r.body.title,
        category: r.body.categories,
	image: image,
        message: r.body.content
    });
    article.save(function (err) {
        if (!err) {
            console.log("articleSmall created");
            return r.res.send({ status: 'OK', article:article.articleId });
        } else { console.log(err); }
    });
}
