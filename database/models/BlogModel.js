const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||'mongodb+srv://userone:userone@group4.2qd1x.mongodb.net/GROUP4?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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