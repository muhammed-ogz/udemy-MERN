var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    pass:"",
    database:"nodejsdenemeveritabani"
});

connection.connect(function(err){
    if(err) throw err;

    connection.query("SELECT * FROM ogrenciler",function(err,sonuc,alanlar){
        console.log(alanlar);
    });
})