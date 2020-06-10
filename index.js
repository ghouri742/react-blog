const express = require('express')
const app = express()
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://ghouri742:@@@@aman@react-blog-2mktb.mongodb.net/<dbname>?retryWrites=true&w=majority',
{useNewUrlParser:true}) .then(()=>console.log("DB connected"))
                        .catch(err => console.error(err));

app.get('/', function (req, res) {
  res.send('Hello, World!')
})


app.listen(5000)