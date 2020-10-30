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

exports.addManusia = function(req, res) {
    var nama = req.body.nama;
    var nimu = req.body.nimu;
    var pekerjaan = req.body.pekerjaan;
    connection.query('INSERT INTO manusia (nama, nimu, pekerjaan) VALUE (?, ?, ?)', [nama, nimu, pekerjaan], (error, rows, filed) => {
        if(error){
            console.log(error)
        }else{
            response.ok("Yippie! New data has added!", res)
        }
    })
}

exports.changeManusia = function(req, res){
    var id = req.body.id_manusia;
    var nama = req.body.nama;
    var nimu = req.body.nimu;
    var pekerjaan = req.body.pekerjaan;

    connection.query('UPDATE manusia SET nama = ? nimu = ? pekerjaan = ?', [nama, nimu, pekerjaan], (error, rows, filed) => {
        if(error){
            console.log(error)
        }else{
            response.ok("Wow! Data has changed!");
        }
    })
}