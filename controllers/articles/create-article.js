'use strict';
import {Article} from '../../libs/mongoose';

export default async r=>{
let image = '/blog.png';
if (req.body.image) image = req.body.image; 	
    let article = new Article({
        name: req.body.title,
        category: req.body.categories,
	image: image,
        message: req.body.content
    });
    article.save(function (err) {
        if (!err) {
            console.log("articleSmall created");
            return res.send({ status: 'OK', article:article.articleId });
        } else { console.log(err); }
    });
    
});

}
