exports.view = function(req, res){
    var word = req.query.word;
    var col = req.params.col;
    var data = {
      "word": word,
      "colID": col
    }
    res.render('viewCol', data);
};