"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
var activiteSchema = new mongoose_1["default"].Schema({
    id: { type: Number, required: true },
    nom_activite: { type: String, required: true },
    date_activite: { type: Date, required: true, "default": new Date() }
});
activiteSchema.plugin(mongoose_paginate_1["default"]);
var Activite = mongoose_1["default"].model("Activite", activiteSchema);
exports["default"] = Activite;
