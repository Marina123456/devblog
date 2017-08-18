var express = require('express');
var app = express();
var server = require('http').createServer(app);
//var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
var config = require('./libs/config');

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
let ArticleSmallModel = require('./libs/mongoose').ArticleSmallModel;
//let ArticleBigModel = require('./libs/mongoose').ArticleBigModel;
let BooksSmallModel = require('./libs/mongoose').BooksSmallModel;
let Project = require('./libs/mongoose').Project;
let Article = require('./libs/mongoose').Article;
//----//

app.get('/', function (req, res) {
    ArticleSmallModel.find(function (err, articlesSmall) {
        res.render('index', {articlesSmall: articlesSmall});
    });

});
app.get('/projects', function (req, res) {
    Project.find(function (err, project) {
        res.render('projects',{project: project});
    });
});
app.get('/links', function (req, res) {
    ArticleSmallModel.find(function (err, articlesSmall) {
        res.render('links' );
    });
});
app.get('/contact', function (req, res) {
    ArticleSmallModel.find(function (err, articlesSmall) {
        res.render('contact');
    });
});

app.get('/admin-article', function (req, res) {
    res.render('add_article');
});

app.post('/api/articlesSmall', function(req, res) {
    //console.log(req.body);
    var articleSmall = new ArticleSmallModel({
        title: req.body.title,
        description: req.body.description,
        category: req.body.description
    });
    articleSmall.save(function (err) {
        if (!err) {
            console.log("articleSmall created");
            return res.send({ status: 'OK', articleSmall:articleSmall });
        } else { console.log(err); }
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
    
    //return res.send(article);
});
app.post('/api/project', function(req, res) {
    //console.log(req.body);
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
app.delete('/api/articlesSmall', function(req, res) {
    //console.log(req.body);
    var articleSmall = new ArticleSmallModel({});
    articleSmall.remove(function (err) {
        if (!err) {
            console.log("articleSmall delete");
            return res.send({ status: 'OK', articleSmall:articleSmall });
        } else { console.log(err); }
    });
});