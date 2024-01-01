var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    pass:"",
    database:"nodejsdenemeveritabani"
});

connection.connect(function(err){
    if(err) throw err;

    var isim = "Oguzhan";
    var adres = "Kayseri/kocasinan";
    var sorgu = "SELECT * FROM ogrenciler WHERE name = ? AND adres = ?";

    connection.query(sorgu,[isim,adres],function(err,res){
        if(err) throw err;
        console.log(res)
    })
})