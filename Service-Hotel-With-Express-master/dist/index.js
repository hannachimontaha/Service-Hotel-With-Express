"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var activite_model_1 = __importDefault(require("./activite.model"));
var reservation_model_1 = __importDefault(require("./reservation.model"));
var user_model_1 = __importDefault(require("./user.model"));
var eurekaHelper = require('./eureka-helper');
var app = (0, express_1["default"])();
app.use(body_parser_1["default"].json());
var uri = "mongodb://localhost:27017/hotel";
mongoose_1["default"].connect(uri, function (err) {
    if (err)
        console.log(err);
    else
        console.log("mongo database connected success");
});
// Activite
// GET-all
app.get("/activite", function (req, resp) {
    activite_model_1["default"].find(function (err, activites) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(activites);
    });
});
// GET_ID
app.get("/activite/:id", function (req, resp) {
    activite_model_1["default"].findById(req.params.id, function (err, activites) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(activites);
    });
});
app.put("/activite/:id", function (req, resp) {
    activite_model_1["default"].findByIdAndUpdate(req.params.id, req.body, function (err) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("activity updated succeslully");
    });
});
app["delete"]("/activite/:id", function (req, resp) {
    activite_model_1["default"].findByIdAndDelete(req.params.id, function (err) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("activity deleted succeslully");
    });
});
app.post("/activite", function (req, resp) {
    var activite = new activite_model_1["default"](req.body);
    activite.save(function (err) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(activite);
    });
});
//Reservation
//GETALL
app.get("/reservation", function (req, resp) {
    reservation_model_1["default"].find(function (err, reservations) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(reservations);
    });
});
app.get("/reservation/:id", function (req, resp) {
    reservation_model_1["default"].findById(req.params.id, function (err, reservations) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(reservations);
    });
});
//POST
app.post("/reservation", function (req, resp) {
    var reservation = new reservation_model_1["default"](req.body);
    reservation.save(function (err) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(reservation);
    });
});
app.put("/reservation/:id", function (req, resp) {
    reservation_model_1["default"].findByIdAndUpdate(req.params.id, req.body, function (err) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("Reservation updated succeslully");
    });
});
app["delete"]("/reservation/:id", function (req, resp) {
    reservation_model_1["default"].findByIdAndDelete(req.params.id, function (err) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("Reservation deleted succeslully");
    });
});
//user
//GETALL
app.get("/user", function (req, resp) {
    user_model_1["default"].find(function (err, users) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(users);
    });
});
app.get("/user/:id", function (req, resp) {
    user_model_1["default"].findById(req.params.userId, function (err, users) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(users);
    });
});
//POST
app.post("/user", function (req, resp) {
    var user = new user_model_1["default"](req.body);
    user.save(function (err) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(user);
    });
});
app.put("/user/:id", function (req, resp) {
    user_model_1["default"].findByIdAndUpdate(req.params.userId, req.body, function (err) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("user updated succeslully");
    });
});
app["delete"]("/user/:id", function (req, resp) {
    user_model_1["default"].findByIdAndDelete(req.params.id, function (err) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("user deleted succeslully");
    });
});
app.get("/", function (req, resp) {
    resp.send("hello express");
});
app.listen(8084, function () {
    console.log("server started");
});
eurekaHelper.registerWithEureka('hotel', 8084);
