const mongoose=require('mongoose');
const connectDB=async()=>{
    try {
        const con=await mongoose.connect(process.env.MONGO_URL,
            {useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false,useCreateIndex:true});
            console.log(`MongoDB connected: ${con.connection.host}`);

    } catch (error) {
        console.log(err);
        process.exit(0);
    }
}

module.exports=connectDB;