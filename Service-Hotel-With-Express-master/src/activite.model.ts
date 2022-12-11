import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate"

let activiteSchema = new mongoose.Schema({
    id : {type:Number , required:true},
    nom_activite:{type:String, required:true},
    date_activite:{type:Date, required:true,default:new Date()}
    });
    activiteSchema.plugin(mongoosePaginate)
    const Activite = mongoose.model("Activite",activiteSchema)
    export default Activite;