import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect("mongodb+srv://therealjinxyz:nilonuj7@mydb.mgot7rj.mongodb.net/?retryWrites=true&w=majority&appName=myDB")
    console.log("Database Connected")
}