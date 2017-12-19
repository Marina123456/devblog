'use strict';
import getUserController from '../../controllers/users/get-user';

export default class Router {
   static rtr(x) {
        const r = x.Router();
        r
          .route('/')
          .post(getUserController)
        ;       
        return r;
  }
}
