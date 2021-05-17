const express = require("express");
const bodyParser = require("body-Parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1+n2;

  res.send("the answer is " + result);
})

app.listen(3000, function(){
  console.log("server has started on the port 3000");
});
