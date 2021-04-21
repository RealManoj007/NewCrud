const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const path=require('path');

const connectDB=require('./server/database/connection');

const app=express();

dotenv.config({path:'config.env'});//path to use .env file
const PORT=process.env.PORT ;

//log request
app.use(morgan('tiny'));

//MongDB Connection
connectDB();
// parse request to body-parser
app.use(bodyParser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//load roouter
app.use('/',require('./server/routes/router'));
// app.get("/update_user",()=>{
//     res.render("update_user");
// })

app.listen(PORT,()=>{
    console.log("App is redirected to port 3000");
})