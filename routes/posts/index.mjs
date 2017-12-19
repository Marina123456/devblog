'use strict';
//import getArticleController from '../../controllers/articles/get-article';
import getArticlesController from '../../controllers/articles/get-articles';
import createArticleController from '../../controllers/articles/create-article';
import deleteArticleController from '../../controllers/articles/delete-article';

export default class Router {
   static rtr(x) {
        const r = x.Router();
        r
          .route('/')
          .get (getArticlesController)
          .post(createArticleController)
          
        ;

        r
          .route('/:id')
          //.get (getArticleController)
          .delete(deleteArticleController)
        ;
        return r;
  }
}
