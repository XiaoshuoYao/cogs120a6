/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var search = require('./routes/search');
var AchC = require('./routes/AchC');
var CPH = require('./routes/CollectionPH');
var PPH = require('./routes/ProfilePH');
var GPH = require('./routes/GroupPH');
var APH = require('./routes/AccountPH');
var AchPH = require('./routes/AchievementPH');
var RPH = require('./routes/RecordPH');
var SPH = require('./routes/SettingsPH');
var colS = require('./routes/colselecter');
var login = require('./routes/login');
var viewCol = require('./routes/viewCol');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.view);
// Example route
// app.get('/users', user.list);
app.get('/main', index.view);
app.get('/collections', colS.view);
app.get('/search', search.view);
app.get('/AchC', AchC.view);
app.post('/search/:col/addCol', CPH.addCol);
app.post('/:col/search/:word/delete', CPH.deleteWord);
app.get('/:col/colSearch', viewCol.view);
app.get('/PPH', PPH.view);
app.get('/GPH', GPH.view);
app.get('/APH', index.viewAcount);
app.get('/AchPH', AchPH.view);
app.get('/RPH', RPH.view);
app.get('/SPH', SPH.view);
app.get('/:name', CPH.view);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
