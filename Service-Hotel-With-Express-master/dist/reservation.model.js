"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
var reservationSchema = new mongoose_1["default"].Schema({
    id: { type: Number, required: true },
    client_name: { type: String, required: true },
    nbr_nuits: { type: Number, required: true },
    nbr_chambres: { type: Number, required: true },
    nbr_adultes: { type: Number, required: true },
    nbr_enfants: { type: Number, required: true },
    date_reservation: { type: Date, required: true, "default": new Date() },
    user_id: { type: Number, required: true }
});
reservationSchema.plugin(mongoose_paginate_1["default"]);
var Reservation = mongoose_1["default"].model("Reservation", reservationSchema);
exports["default"] = Reservation;
