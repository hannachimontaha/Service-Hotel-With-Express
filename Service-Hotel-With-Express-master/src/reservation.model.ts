import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate"

let reservationSchema = new mongoose.Schema({
    id : {type:Number , required:true},
    client_name:{type:String, required:true},
    nbr_nuits:{type:Number, required:true},
    nbr_chambres:{type:Number, required:true},
    nbr_adultes:{type:Number, required:true},
    nbr_enfants:{type:Number, required:true},
    date_reservation:{type:Date, required:true, default:new Date()},
    user_id:{type:Number, required:true}
    
    });

    reservationSchema.plugin(mongoosePaginate)
    const Reservation = mongoose.model("Reservation",reservationSchema)
    export default Reservation;