const express=require("express");
const app=express();
const PORT=process.env.PORT||3300;
const path=require('path');
const cors=require('cors');

const dotenv=require('dotenv');
dotenv.config({path:'./.env'});


// const corsOptions={
    // origin:process.env.ALLOWED_CLIENTS.split(',')
// }


app.use(express.static('public'));
// app.use(cors(corsOptions));
app.use(cors());


const connectDB=require("./config/db");
connectDB();


//middleware to parse requested data in json form 
app.use(express.json());

app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs');


//Routes
app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'));

app.listen(PORT,()=>{
    console.log(`Server is listening on Port : ${PORT}`);
})


