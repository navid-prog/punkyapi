const asyncHandler = require('express-async-handler')

const Punky = require('../models/punkyModel')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


const getPunky = asyncHandler(async (req, res) => {
    MongoClient.connect('mongodb+srv://punky:punky@cluster0.vdpyn.mongodb.net/punky.punky?retryWrites=true&w=majority', function(err, db) {
        if (err) throw err;
        var dbo = db.db("punky");
        dbo.collection("punky").find({wallet: req.params.id }).toArray(function(err, result) {
            if (err) throw err;
         
            res.status(200).json(result)
          });
      });
})

const getcyberPunky = asyncHandler(async (req, res) => {
    MongoClient.connect('mongodb+srv://punky:punky@cluster0.vdpyn.mongodb.net/punky.punky?retryWrites=true&w=majority', function(err, db) {
        if (err) throw err;
        var dbo = db.db("cyberpunky");
        dbo.collection("punky").find({wallet: req.params.id }).toArray(function(err, result) {
            if (err) throw err;
         
            res.status(200).json(result)
          });
      });
})

const getspacePunky = asyncHandler(async (req, res) => {
    MongoClient.connect('mongodb+srv://punky:punky@cluster0.vdpyn.mongodb.net/punky.punky?retryWrites=true&w=majority', function(err, db) {
        if (err) throw err;
        var dbo = db.db("spacepunky");
        dbo.collection("punky").find({wallet: req.params.id }).toArray(function(err, result) {
            if (err) throw err;
         
            res.status(200).json(result)
          });
      });
})

const getlegendaryPunky = asyncHandler(async (req, res) => {
    MongoClient.connect('mongodb+srv://punky:punky@cluster0.vdpyn.mongodb.net/punky.punky?retryWrites=true&w=majority', function(err, db) {
        if (err) throw err;
        var dbo = db.db("legendarypunky");
        dbo.collection("punky").find({wallet: req.params.id }).toArray(function(err, result) {
            if (err) throw err;
         
            res.status(200).json(result)
          });
      });
})

module.exports = {
    getPunky,
    getcyberPunky,
    getspacePunky,
    getlegendaryPunky
}