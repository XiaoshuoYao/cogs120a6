var dataC1 = require('../Collection 1.json');
var dataC2 = require('../Collection 2.json');
var dataC3 = require('../Collection 3.json');
var colData = require('../collectionData.json');
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
    
    if (col == 'Collection 1') {
        var wordData = {
            "word": word,
            "colID" : 1,
            "display": true
        }
        for(i = 0; i < dataC1.words.length; i++){
            if(dataC1.words[i].word == word) {
                temp = true;
                throw "Error";
            }
        }
        if(temp == false){
            dataC1['words'].push(wordData);
            colData.collections[0].wordNum++;
        }
    }
    if (col == 'Collection 2') {
        var wordData = {
            "word": word,
            "colID" : 2,
            "display": true
        }
        for(i = 0; i < dataC2.words.length; i++){
            if(dataC2.words[i].word == word) {
                temp = true;
                throw "Error";
            }
        }
        if(temp == false){
            dataC2['words'].push(wordData);
            colData.collections[1].wordNum++;
        }
    }
    if (col == 'Collection 3') {
        var wordData = {
            "word": word,
            "colID" : 3,
            "display": true
        }
        for(i = 0; i < dataC3.words.length; i++){
            if(dataC3.words[i].word == word) {
                temp = true;
                throw "Error";
            }
        }
        if(temp == false){
            dataC3['words'].push(wordData);
            colData.collections[2].wordNum++;
        }
    }
};

exports.deleteWord = function(req, res){
    var word = req.params.word;
    var col = req.params.col;
    console.log(col);
    deleted = false;
    switch (col) {
        case '1':
            for(i = 0; i < dataC1.words.length; i++){
                if(dataC1.words[i].word == word) {
                    delete dataC1.words[i].word;
                    dataC1.words[i].display = false;
                    colData.collections[0].wordNum--;
                    return 1;
                }
            }
        case '2':
            for(i = 0; i < dataC2.words.length; i++){
                if(dataC2.words[i].word == word) {
                    delete dataC2.words[i].word;
                    dataC2.words[i].display = false;
                    colData.collections[1].wordNum--;
                    return 1;
                }
            }
        case '3':
            for(i = 0; i < dataC3.words.length; i++){
                if(dataC3.words[i].word == word) {
                    delete dataC3.words[i].word;
                    dataC3.words[i].display = false;
                    colData.collections[2].wordNum--;
                    return 1;
                }
            }
    }
    throw "errer";
}  

