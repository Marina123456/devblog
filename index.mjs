'use strict';
import express from 'express';
let app = express();
import http from 'http';
let server = http.createServer(app);
let port = process.env.PORT || 3000;
import config from './db/config';
import posts from './routes/posts';

import {Article} from './models/Article';
import {User} from './models/User';
import {BooksSmall} from './models/BooksSmall';
import {Project} from './models/Project';
import {ArticleSmall} from './models/ArticleSmall';

app.listen(port, function(){
    console.log('Express server listening on port ' + config.get('port'));
});
import bodyParser from 'body-parser';
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app
.set('view engine', 'jade')
.use(express.static('public'))
.use('/api/posts', posts.rtr(express))
.get('/', function (req, res) {
    ArticleSmall.find(function (err, articlesSmall) {
        res.render('index', {articlesSmall: articlesSmall});
    })

})
.get('/login', function (req, res) {
    res.render('login');
})
.get('/projects', function (req, res) {
    Project.find(function (err, project) {
        res.render('projects',{project: project});
    });
})
.get('/links', function (req, res) {
    res.render('links' );
})
.get('/contact', function (req, res) {
    res.render('contact');
})

.use('/admin/articles',express.static('public'))
.get('/admin/articles/add', function (req, res) {
    res.render('add_article');
})
.get('/admin/articles/all', function (req, res) {    
    res.render('all_articles');
})

.use('/article',express.static('public'))
.get('/article/:id', function (req, res) {
    Article.findOne({ 'articleId': req.params["id"]}, function(err, article){
        article.message=article.message.replace(new RegExp("\\\n",'g'),"");
        res.render('article',{article:article});        
    });    
})

.post('/api/login/',function(req,res){
    let user = req.body.user;
    let password = req.body.password;
    
    User.findOne({ 
            'user': user,
            'password':password
        }, function(err, user){
            if (user){
                 res.send({status:'OK',user:user});
            } else {
                res.send({status:'NO'});
            }
        });   
    
})
.post('/api/project', function(req, res) {
    var project = new Project({
        title: req.body.title,
        description: req.body.description
    });
    project.save(function (err) {
        if (!err) {
            console.log("articleSmall created");
            return res.send({ status: 'OK', project:project });
        } else { console.log(err); }
    });
});

