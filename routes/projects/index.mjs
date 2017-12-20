'use strict';
import createProjectController from '../../controllers/projects/create-project';
import getProjectsController from '../../controllers/projects/get-projects';
import createProjectController from '../../controllers/projects/create-project';
import deleteProjectController from '../../controllers/projects/delete-project';

export default class Router {
   static rtr(x) {
        const r = x.Router();
        r
          .route('/')
          .get (getProjectsController)
          .post(createProjectController)
          
        ;

        r
          .route('/:id')
          .get (getProjectController)
          .delete(deleteProjectController)
        ;
        return r;
  }
}