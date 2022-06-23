const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser'); 
const Bloglist = require('./database/models/BlogModel');
username='admin';
password='12345';

const path = require ('path'); 


const app = new express();

app.use(express.urlencoded({extended:true})); 
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

  app.get('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  Bloglist.find()
                .then(function(blogdata){
                    res.send(blogdata);
                });
});

app.post('/insert',verifyToken,function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
   console.log(req.body);

    var blogs = {
       
        title: req.body.item.title,
        author: req.body.item.author,
        body: req.body.item.body
    }

    var blog = new Bloglist(blogs);
      blog.save();
})


app.get('/bloglist',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    Bloglist.find()
            .then(function(blogdata){
                res.send(blogdata);
                })
});

// router for single blog
app.get('/:id',  (req, res) => {
   
    const id = req.params.id;
      Bloglist.findOne({"_id":id})
      .then((blogdata)=>{
          res.send(blogdata);
      });
  })

  app.post('/login', (req, res) => {
    let userData = req.body
    console.log(username,password);
    
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
            let payload = {subject: username+password}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
        })


//   router to update bloglist
  app.put('/update/:id',(req,res)=>{
    console.log(req.body)
   title= req.body.title,
    author = req.body.author,
    body = req.body.body,
  
   Bloglist.findByIdAndUpdate({"_id":id},
                                {$set:{"title":title,
                                "author":author,
                                "body":body,
                               }})
   .then(function(){
    console.log('added')
       res.send();
   })
 })
 


app.delete('/remove/:id',(req,res)=>{
 
   id = req.params.id;
   Bloglist.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })
   



app.listen(process.env.PORT||3000, ()=>{
    console.log("Server is Ready on 3000");
});
