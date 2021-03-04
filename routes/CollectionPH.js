var dataC1 = require('../Collection 1.json');
var dataC2 = require('../Collection 2.json');
var dataC3 = require('../Collection 3.json');
var data;

exports.view = function(req, res){
    var col = req.params.name;
    if (col == 'Collection 1') {
        data = dataC1;
    }
    if (col == 'Collection 2') {
        data = dataC2;
    }
    if (col == 'Collection 3') {
        data = dataC3;
    }
    res.render('CollectionPlaceholder', data);
};

exports.addCol = function(req, res){    
    var col = req.params.col;
    word = req.body.word;
    console.log(col);
    temp = false;
    var wordData = {
        "word": word,
        "count" : 1
    }
    if (col == 'Collection 1') {
        for(i = 0; i < dataC1.words.length; i++){
            if(dataC1.words[i].word == word) {
                temp = true;
                throw "Error";
            }
        }
        if(temp == false){
            dataC1['words'].push(wordData);
        }
    }
    if (col == 'Collection 2') {
        for(i = 0; i < dataC2.words.length; i++){
            if(dataC2.words[i].word == word) {
                temp = true;
                throw "Error";
            }
        }
        if(temp == false){
            dataC2['words'].push(wordData);
        }
    }
    if (col == 'Collection 3') {
        for(i = 0; i < dataC3.words.length; i++){
            if(dataC3.words[i].word == word) {
                temp = true;
                throw "Error";
            }
        }
        if(temp == false){
            dataC3['words'].push(wordData);
        }
    }

};
