const express=require("express");
const router=express.Router();
const passport = require("passport");
const catchAsync=require("../utils/catchAsync")
const users=require("../controllers/uers");


router.route("/register")
.get(users.renderRegister)
.post (catchAsync(users.createUser));

router.route("/login")
.get(users.renderLogin)
.post(passport.authenticate("local",{failureFlash:true,failureRedirect:"/login"}),users.userLogin);

router.get("/logout",users.logout);






module.exports=router;