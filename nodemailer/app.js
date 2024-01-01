var nodemailer = require("nodemailer"); // node mailer kütüphanemi ekledim

var transfer = nodemailer.createTransport({
  service: "gmail", // gönderen mailin kullandığı servis
  auth: {
    //gönderecek kişinin mail bilgileri
    user: "muhammednabioguz@gmail.com",
    pass: "!anaskmandros66)",
  },
});

var mail = {
  from: "muhammednabioguz@gmail.com",
  to: "muhammednabioguz@outlook.com",
  subject: "NodeJS ile mail gönderme",
  text: "NodeJS ile ilk mailimi gönderiyorum.",
  html:"<h1>HTML Başlığı</h1><strong> HTML ile Mail Gönderme işlemi yapıyorum çalışacak mı onu da bilmiyorum </strong>", 
  //html gönderdiğimiz zaman texti göndermiyor...
};

transfer.sendMail(mail,function(error){
    if(error) console.log(error);
    else console.log("Mail başarı ile gönderildi !");
})