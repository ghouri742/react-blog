const express = require('express')
const app = express()
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const cookieParser=require('cookie-parser')
const {User} =require('.//model/user')
const config=require('./config/key')
//mongoose.connect('mongodb+srv://ghouri742:@@@@aman@react-blog-2mktb.mongodb.net/<dbname>?retryWrites=true&w=majority')

mongoose.connect(config.mongoURL,
{useNewUrlParser:true}).then(()=>console.log("DB connected"))
                       .catch(err => console.log("DB Not Connected" +err));
                
app.get('/', function (req, res) {
  res.send('Hello, World!')
})


app.use(bodyparser.urlencoded({extended:true}))

app.use(bodyparser.json())

app.use(cookieParser());

app.post('/add_user',(req,res)=>{
  var email=req.body.email;
  var password=req.body.password
  var name =req.body.name;
  var lastname=req.body.lastname

  console.log(email+name);
  const user=new User(req.body)

  user.save((err,data)=>{
    if(err) return res.json({success:false,err})
  
    return res.status(200).json({
       success:true
})
  })
})


app.listen(5000)