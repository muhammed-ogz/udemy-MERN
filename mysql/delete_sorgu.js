var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    pass:"",
    database:"nodejsdenemeveritabani"
});

connection.connect(function(err){
    if(err) throw err;

    var sorgu = "DELETE FROM ogrenciler WHERE id > 5";

    connection.query(sorgu, function(err,res){
        if(err) throw err;
        console.log("Silme İşlemi Başarı İle Tamamlandı !");
    });
});