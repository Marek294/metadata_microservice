var express = require("express");
var router = express();
var port = process.env.PORT || 3000;
var multer = require("multer");

router.set('view engine', 'ejs');

router.get("/", (req,res) => {
    res.render("index");
});

router.listen(port, () => {
    console.log("Server listening at port "+port);
})