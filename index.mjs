'use strict';
import express from 'express';
import http from 'http';
import config from './db/config';
import bodyParser from 'body-parser';

//роутеры
import posts from './routes/posts';
import projects from './routes/projects';
import users from './routes/users';

//модели
import {Article} from './models/Article';
import {ArticleSmall} from './models/ArticleSmall';
import {Project} from './models/Project';



let app = express();
let server = http.createServer(app);
let port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('Express server listening on port ' + config.get('port'));
});

app
.use(bodyParser.json())      // to support JSON-encoded bodies
.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}))

.set('view engine', 'jade')
.use(express.static('public'))

.use('/api/posts', posts.rtr(express))
.use('/api/login', users.rtr(express))
.use('/api/project', projects.rtr(express)) 

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
});


