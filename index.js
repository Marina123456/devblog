var express = require('express');
var app = express();
var server = require('http').createServer(app);
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
let BooksSmallModel = require('./libs/mongoose').BooksSmallModel;
let Project = require('./libs/mongoose').Project;
let Article = require('./libs/mongoose').Article;
let User = require('./libs/mongoose').User;
//----//

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
app.get('/api/posts/:id', function (req, res) {
    Article.findOne({ 'articleId': req.params["id"]}, function(err, article){
	    
    article.message=article.message.replace(new RegExp("\\\n",'g'),"прошел");
    res.send({
        id:         article.articleId,
        title:      article.name,
        categories: article.category,
        content:    article.message
    });    
    });
    
});
app.get('/api/posts', function (req, res) {
    Article.find(function(err, article){
	
	let posts=article.map(function(elem, index) {	
        	let lem_new={
            	id:         elem.articleId,
            	title:      elem.name,
            	categories: elem.category,
            	content:    elem.message.replace(new RegExp("\\\n",'g'),"прошел")
        	};
	return lem_new; });
    	res.send(posts);
    });
});
app.delete('/api/posts/:id', function (req, res) {
     Article.findOneAndRemove( {'articleId': req.params["id"]}, (err, article) => {  
   	res.send({
        	id:         article.articleId,
        	title:      article.name,
        	categories: article.category,
        	content:    article.message
    });
   });
    
});

app.post('/api/posts/',function(req,res){
let image = '/blog.png';
if (req.body.image) image = req.body.image; 	
    let article = new Article({
        name: req.body.title,
        category: req.body.categories,
	image: image,
        message: req.body.content
    });
    article.save(function (err) {
        if (!err) {
            console.log("articleSmall created");
            return res.send({ status: 'OK', article:article.articleId });
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

