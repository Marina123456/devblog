'use strict';
import {Article} from '../../libs/mongoose';

export async r=>{
    Article.findOne({ 'articleId': r.params["id"]}, function(err, article){
	    
    article.message=article.message.replace(new RegExp("\\\n",'g'),"прошел");
    r.res.send({
        id:         article.articleId,
        title:      article.name,
        categories: article.category,
        content:    article.message
    });    
    });
}
