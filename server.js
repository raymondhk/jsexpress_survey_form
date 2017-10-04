var express = require('express')
var session = require('express-session')
var app = express()
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'iguessitssecret'}))
app.get('/', function(req, res){
    res.render('index')
})

app.post('/result', function (req, res){
    console.log(req.body)
    res.render('result', {data: req.body})
})
app.use(express.static(__dirname + "/static"))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.listen(8000, function(){
    console.log('listening on port 8000')
})