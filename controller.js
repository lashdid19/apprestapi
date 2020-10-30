'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function(req, res){
    response.ok("Hooray! Your Rest Api is running!", res)
}

exports.displayManusia = function(req, res){
    connection.query('SELECT * FROM manusia', (error, rows, fileds) => {
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    })
}

exports.displayManusiaById = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM manusia WHERE id_manusia = ?', [id], (error, rows, filed) => {
        if(error){
            console.log(error)
        }else{
            response.ok(rows, res);
        }
    })
} 