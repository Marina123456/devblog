'use strict';
import getArticleController from '../../controllers/article/get-article';
import getArticlesController from '../../controllers/article/get-articles';
import createArticleController from '../../controllers/article/create-article';
import deleteArticleController from '../../controllers/article/delete-article';

export default class Router {
   static rtr(x) {
        const r = x.Router();
        r
          .route('/')
          .get ( getArticlesController  )
          .post( createArticleController)
          
        ;

        r
          .route('/:id')
          .get ( getArticleController  )
          .delete(deleteArticleController)
        ;
        return r;
  }
}
