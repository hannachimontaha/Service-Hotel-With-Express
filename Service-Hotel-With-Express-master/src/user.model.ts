import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate"

let userSchema = new mongoose.Schema({
    userId : {type:Number , required:true},
    username:{type:String, required:true},
    password:{type:Number, required:true}
   
    
    });

    userSchema.plugin(mongoosePaginate)
    const User = mongoose.model("User",userSchema)
    export default User;