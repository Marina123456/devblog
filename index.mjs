'use strict';
import express from 'express';
let app = express();
import http from 'http';
let server = http.createServer(app);
let port = process.env.PORT || 3000;
import config from './libs/config';
import posts from './routes/posts';


app.listen(port, function(){
    console.log('Express server listening on port ' + config.get('port'));
});
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));
app.set('view engine', 'jade');


//CRUD Article
import {ArticleSmallModel, BooksSmallModel, Project, Article, User} from './libs/mongoose';
//----//
app.use('/api/posts', posts.rtr(express));
app.get('/', function (req, res) {
    ArticleSmallModel.find(function (err, articlesSmall) {
        res.render('index', {articlesSmall: articlesSmall});
    });

});
app.get('/login', function (req, res) {
    res.render('login');
});
app.get('/projects', function (req, res) {
    Project.find(function (err, project) {
        res.render('projects',{project: project});
    });
});
app.get('/links', function (req, res) {
    res.render('links' );
});
app.get('/contact', function (req, res) {
    res.render('contact');
});

app.get('/admin-article', function (req, res) {
    res.render('add_article');
});
app.get('/admin-allarticles', function (req, res) {
    res.render('all_articles');
});
app.get('/article_:id', function (req, res) {
    Article.findOne({ 'articleId': req.params["id"]}, function(err, article){
        article.message=article.message.replace(new RegExp("\\\n",'g'),"прошел");
        res.render('article',{article:article});        
    });    
});
app.post('/api/article/',function(req,res){
    let article = new Article({
        name: req.body.name,
        category: req.body.category,
        image: req.body.image,
        message: req.body.message
    });
    article.save(function (err) {
        if (!err) {
            console.log("articleSmall created");
            return res.send({ status: 'OK', article:article });
        } else { console.log(err); }
    });
    
});

app.post('/api/login/',function(req,res){
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
    
});
app.post('/api/project', function(req, res) {
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

