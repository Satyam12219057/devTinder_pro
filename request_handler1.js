
 const express=require("express")
 const app=express();
 //handle auth middelware for all the request GET,POST


 //here i am going to import the auth file"
 const { adminAuth,userAuth }=require("./middelware/auth.js");
/*
 //this is the auth function which handle the auth 
 //this will call for all the request and validate it


 app.use("/admin",(req,res,next)=>{
     console.log("admin auth is getting check");
  const token="xyz";
   const isAdminAuthorized=token==="xyz";
   if(!isAdminAuthorized){
    res.status(401).send("unauthorized request");
   }else{
    next();
   }
});*/
//we can do these work same with 
app.use("/admin",adminAuth);

 app.get("/admin/getAllData",(req,res)=>{
  res.send("get all the data");
 });

 app.get("/user/deleteUser",userAuth,(req,res)=>{
  res.send("delete all the data")
 });

 app.listen(7777,()=>{
  console.log("server is successfully listening on the port");
 });