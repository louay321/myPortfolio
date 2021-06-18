const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');

const landingContent = "";
const homeContent = "haya hak jit ya weld l9a7ba jad 3lik bsh tnik?"

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let terminal = [
  "Hi, You are entering Louay’s portfolio.",
  "Would you like to proceed to the website ? y/n"
                ];
app.post('/', (req, res)=>{
  var content ={ Content : req.body.sendText};
  terminal.push(content.Content);
  console.log(terminal);
  if (content.Content == 'yes' || content.Content == 'y'){
    res.redirect("/home")
  }
  else if(content.Content == 'c' || content.Content == 'clear'){
    terminal = ["Would you like to proceed to the website ? y/n"];
    res.redirect("/");
  }
  else if(content.Content == 'cd home'){
    res.redirect("/home");
  }

  else{res.redirect("/");}
});



app.get('/', (req, res) => res.render("landing", {
  landingContent : landingContent,
  terminal: terminal
}));


app.get('/home', (req, res)=> res.render("home", {
  homeContent : homeContent



}))

app.listen(3000, ()=> console.log("Server working ON port 3000!"));
