'use strict';

module.exports = function(app){
    var myjson = require('./controller')

    app.route('/')
        .get(myjson.index);

    app.route('/manusia')
        .get(myjson.displayManusia);

    app.route('/manusia/:id')
        .get(myjson.displayManusiaById);
}