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
const express=require("express");
const app=express();
app.get("/user",(req,res,next)=>{
  console.log("handling the route handler 2!!");
  //res.send("second route handle");
  next();
});
app.get("/user",(req,res,next)=>{
  console.log("handling the route!!");
  next();
});

//now i am going to ready my request handler to listen the request
app.listen(7777,()=>{
  console.log("my server is ready to response");
})