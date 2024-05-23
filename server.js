//express
const express = require("express");
const cors = require('cors');
const app = express();
const port =3000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));


let corsOptions = {
  origin:[ 'http://localhost:5173', 'https://cookiewalk.netlify.app'],
  credentials: true
}

//CORS 사용
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", function (req,res){
  res.send("hello world")
})
app.use('/reverse_geocoding', require("./routes/reverseGeocoding"))
// app.use('/staticmap', require("./routes/staticMap"))

app.listen(port,()=>{
  console.log(`${port}번 포트에서 서버 실행중`)
});