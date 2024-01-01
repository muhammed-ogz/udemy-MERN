var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    pass:"",
    database:"nodejsdenemeveritabani"
});

connection.connect(function(err){
    if(err) throw err;

    var sorgu = "INSERT INTO ogrenciler (name, adres) values ?"
    var values = [
        ["Muhammed","Istanbul/Beşiktaş"],
        ["Merve" , "Ankara/Çankırı"],
        ["Mustafa","Izmir/Bornova"]
    ];

    connection.query(sorgu,[values],function(err){  //çoklu dizi girişinde values' u köşeli parantezde tutuyoruz ona dikkat etmek gerek
        if(err) throw err;
        console.log("Veri/veriler başarı ile kayıt edildi !");
    })
});