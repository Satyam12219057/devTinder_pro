//next function in the request handler have to use to give the right to handle the coming request by next
/*
const express=require("express");
const app=express();
app.use("/user",[(req,res,next)=>{
//route handler
//all kind of the request can be handled by this function
//res.send("route handler 2!");

 //app.use("/route",rh1,rh2,rh3,rh4,rh5);
 //we have to handle the multiple routes as like this




console.log("this is my response");
next();
res.send("route handler 2!");
},(req,res,next)=>{
  console.log("this is my second response");
  res.send("second response!");
  next();
}],(req,res)=>{
console.log("this is my third response");
  res.send("third response!");
},(req,res)=>{
  console.log("we cannot use next function at the last request handler");
  res.send("at lest here we have to give response");
})

app.listen(7777,()=>{
  console.log("server is successfully listening on the port 7777...");

})
  */



//if we have to write the request handler in this way

//the job of the express is taking the request and sending the response
/*
const express=require("express");
const app=express();
app.get("/user",(req,res,next)=>{
  console.log("handling the route handler 2!!");
  //res.send("second route handle");
  next();
});
app.get("/user",(req,res,next)=>{
  console.log("handlin the route!!");
  next();
});
app.post("/user",(req,res)=>{
  res.send("post request handler");

})

app.use("/user",(req,res)=>{
  res.send("this is the final response");

})

//now i am going to ready my request handler to listen the request
app.listen(7777,()=>{
  console.log("my server is ready to response");
})
  */
 const express=require("express")
 const app=express();
 //handle auth middelware for all the request GET,POST


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
});
 app.get("/admin/getAllData",(req,res)=>{
  res.send("get all the data");
 });

 app.get("/admin/deleteUser",(req,res)=>{
  res.send("delete all the data")
 });

 app.listen(7777,()=>{
  console.log("server is successfully listening on the port");
 });