import mongoose from 'mongoose';

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB");    
    }catch(err){
        throw new Error("connection failed");
    }
};

export default connect;