'use strict';
import {Article} from '../../libs/mongoose';

export async r=>{
let image = '/blog.png';
if (r.req.body.image) image = r.req.body.image; 	
    let article = new Article({
        name: r.req.body.title,
        category: r.req.body.categories,
	image: image,
        message: r.req.body.content
    });
    article.save(function (err) {
        if (!err) {
            console.log("articleSmall created");
            return r.res.send({ status: 'OK', article:article.articleId });
        } else { console.log(err); }
    });
}
