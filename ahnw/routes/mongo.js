/**
 * node-mongodbのドキュメント
 * http://mongodb.github.io/node-mongodb-native/2.1/
 */
var db;
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
var url = 'mongodb://tk2-410-46049.vs.sakura.ne.jp/otukare';
// var url = 'mongodb://localhost:27017/otukare';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, mongodb) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db = mongodb;
});

var collection = function( name ) {
    return db.collection( name );
}

module.exports = collection;