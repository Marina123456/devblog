'use strict';
import {Article} from '../../models/Article';

export default async r=>{
    Article.find(function(err, article){
    
    let posts=article.map(function(elem, index) {   
            let lem_new={
                id:         elem.articleId,
                title:      elem.name,
                categories: elem.category,
                content:    elem.message.replace(new RegExp("\\\n",'g'),"")
            };
      return lem_new; });
        r.res.send(posts);
    });
}
