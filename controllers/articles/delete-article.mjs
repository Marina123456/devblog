'use strict';
import {Article} from '../../libs/mongoose';

export async r=>{
    Article.findOneAndRemove( {'articleId': r.params["id"]}, (err, article) => {  
   	r.res.send({
        	id:         article.articleId,
        	title:      article.name,
        	categories: article.category,
        	content:    article.message
    });
   });
}
