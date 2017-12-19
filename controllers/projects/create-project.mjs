'use strict';
import {Project} from '../../models/Project';

export default async r=>{
    let project = new Project({
        title: r.body.title,
        description: r.body.description
    });
    project.save(function (err) {
        if (!err) {
            console.log("articleSmall created");
            return r.res.send({ status: 'OK', project:project });
        } else { console.log(err); }
    });
}