'use strict';
import getUsersController from '../../controllers/article/get-article';
import createUserController from '../../controllers/article/create-article';
import deleteUserController from '../../controllers/article/delete-article';

export default class Router {
   static rtr(x) {
        const r = x.Router();
        r
          .route('/')
          .get ( getUsersController  )
          .post( createUserController)
          
        ;

        r
          .route('/:id')
          .get ( getUsersController  )
          .delete(deleteUserController)
        ;
        return r;
  }
}
