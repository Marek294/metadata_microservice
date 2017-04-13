var express = require("express");
var router = express();
var port = process.env.PORT || 3000;
var multer = require("multer");
var upload = multer({ dest: 'uploads/' });

router.set('view engine', 'ejs');

router.get("/", (req,res) => {
    res.render("index");
});

router.post('/', upload.single('file'), function (req, res, next) {
    var obj = {};
    if(req.file) {
        obj.bytes = req.file.size;
        res.status(200).send(obj);
    } else {
        obj.message = "Please upload file";
        res.status(400).send(obj);
    }
})

router.listen(port, () => {
    console.log("Server listening at port "+port);
})