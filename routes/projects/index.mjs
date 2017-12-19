'use strict';
import createProjectController from '../../controllers/projects/create-project';

export default class Router {
   static rtr(x) {
        const r = x.Router();
        r
          .route('/')
          .post(createProjectController)
        ;       
        return r;
  }
}