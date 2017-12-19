'use strict';
import {User} from '../../models/User';

export default async r=>{
    let user = r.body.user;
    let password = r.body.password;
    
    User.findOne({ 
            'user': user,
            'password':password
        }, function(err, user){
            if (user){
                r.res.send({status:'OK',user:user});
            } else {
                r.res.send({status:'NO'});
            }
        }); 
}