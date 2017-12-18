'use strict';
import {Article} from '../../libs/mongoose';

export async r=>{
    Article.findOneAndRemove( {'articleId': req.params["id"]}, (err, article) => {  
   	res.send({
        	id:         article.articleId,
        	title:      article.name,
        	categories: article.category,
        	content:    article.message
    });
   });
}
