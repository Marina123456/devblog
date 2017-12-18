'use strict';
import getUsersController from '../../controllers/get-posts';
import createUserController from '../../controllers/create-posts';
import deleteUserController from '../../controllers/delete-posts';

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
          .delete(deleteUserController)
        ;
        return r;
  }
}
