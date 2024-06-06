import mongoose from "mongoose";

const MONGO_URL = 'mongodb+srv://adalidh141:35413541@inventario.nhnus.mongodb.net/';

export const connectDB = async () =>{
    try{
        await mongoose.connect(MONGO_URL);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("connect mongoDB");
    }catch (err){
        console.log(err);
    }
};
