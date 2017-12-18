'use strict';
import getUsersController from '../../controllers/article/get-article';
import getUsersController from '../../controllers/article/get-articles';
import createUserController from '../../controllers/article/create-article';
import deleteUserController from '../../controllers/article/delete-article';

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
