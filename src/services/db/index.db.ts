import mongoose from "mongoose";
import { envVar } from "../../config/env.production.config";

export async function connectDb(){
    try {
        await mongoose.connect(envVar.DB.URI);
        console.log("DB CONNECTED");
    } catch (error) {
        console.error("DB ERROR" + error)
    }
}