var express = require('express')
var app = express()
var mysql = require('mysql')
var fs = require('fs')
var ejs = require('ejs')
var router = express.Router();



let  client = mysql.createConnection({
  user: "root",
  password: "hhk1013!",
  database: "smart"
})




router.get('/', function(req, res) {

    res.render('insert');

});


//파일관련 모듈
var multer = require('multer')

//파일 저장위치와 파일이름 설정
var storage = multer.diskStorage({
destination: function (req, file, cb) {
//파일이 이미지 파일이면
if (file.mimetype == "image/jpeg" || file.mimetype == "image/jpg" || file.mimetype == "image/png") {
console.log("이미지 파일이네요")
cb(null, 'uploads/images')
//텍스트 파일이면
} else if (file.mimetype == "application/pdf" || file.mimetype == "application/txt" || file.mimetype == "application/octet-stream") {
console.log("텍스트 파일이네요")
cb(null, 'uploads/texts')
}
},
//파일이름 설정
filename: function (req, file, cb) {
cb(null, Date.now() + "-" + file.originalname)
}




})
//파일 업로드 모듈
var upload = multer({ storage: storage })


//파일 업로드 및 디비에 위치 저장
router.post('/',upload.single('im'), function (req, res ) {
  // var form = new multiparty.form();
console.log("post")
console.log(req.file)
console.log(req.file.path)
console.log(upload)
console.log(upload.storage.getFilename)
console.log(req.body)

var category = req.body['category'];
var buyer = req.body['buyer'];


//파일 위치를 mysql 서버에 저장
client.query('insert into clothes(im,category,buyer) values (?,?,?)', [req.file.path,category,buyer], function () {

res.redirect('/users');
});
});

router.get('/info', function(req, res, next){

client.query('insert into clothes(category) values(?)',[req.category], function(err){
  if(!err){
    res.redirect('/users');
  }else{
    console.log(err);
  }
});
});




module.exports = router;
