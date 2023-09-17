const mongoose=require("mongoose");
const connectDB=()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true});
    const connection=mongoose.connection;
    connection.on('error',()=>{
        console.error.bind(console,'Database failed ☹️☹️☹️☹️');
    })
    connection.once('open',()=>{
        console.log("Database connected 🥳🥳🥳🥳");
    });
}


module.exports=connectDB;    