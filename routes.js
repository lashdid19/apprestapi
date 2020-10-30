'use strict';

module.exports = function(app){
    var myjson = require('./controller')

    app.route('/')
        .get(myjson.index);

    app.route('/manusia')
        .get(myjson.displayManusia);

    app.route('/manusia/:id')
        .get(myjson.displayManusiaById);

    app.route('/add')
        .post(myjson.addManusia);

    app.route('/change')
        .put(myjson.changeManusia);
}