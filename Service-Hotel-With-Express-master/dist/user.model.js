"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
var userSchema = new mongoose_1["default"].Schema({
    userId: { type: Number, required: true },
    username: { type: String, required: true },
    password: { type: Number, required: true }
});
userSchema.plugin(mongoose_paginate_1["default"]);
var User = mongoose_1["default"].model("User", userSchema);
exports["default"] = User;
