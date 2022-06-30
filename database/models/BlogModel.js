const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://userone:userone@group4.2qd1x.mongodb.net/GROUP4?retryWrites=true&w=majority')
.then(()=> console.log(" connected"))
.catch((error)=>console.log(error));

const Schema = mongoose.Schema;




const BlogSchema = new Schema({

  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,

});



const Bloglist = mongoose.model('blogdata', BlogSchema);

module.exports = Bloglist;