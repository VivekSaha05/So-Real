const express = require("express");
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//controllers
const authController = require("../controllers/auth.controller");
const mediaController = require("../controllers/media.controller");
const feedsController = require("../controllers/feeds.controller");

router.get("/",feedsController.feeds);

router.get("/post",(req,res)=>{
  res.render("post")
});

router.get("/about",(req,res)=>{
  res.render('about')
})

router.get('/contact',(req,res)=>{
  res.render('contact')
})


router.get("/register", authController.ShowRegisterPage);
router.post("/register", authController.ValidateRegister);


router.get("/upload",mediaController.UploadPicPage);

router.post("/uploadFile",upload.single("avatar"),mediaController.UploadImg);
router.get('/fetch',mediaController.Fetch);

module.exports = router;