
import mongoose from "mongoose";


export const Connection = async(user,password)=>{
    const URL =`mongodb+srv://${user}:${password}@cluster1.e045ks5.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("database connected sucessfully");
    }
    catch(error){
        console.log(error.message);
    }
}

export default Connection;