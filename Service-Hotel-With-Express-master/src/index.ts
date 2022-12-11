import express, { Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Activite from "./activite.model";
import Reservation from "./reservation.model";
import User from "./user.model";
const eurekaHelper = require ('./eureka-helper');
const app= express();
app.use(bodyParser.json())

const uri="mongodb://localhost:27017/hotel";
mongoose.connect(uri,(err)=>
{
    if(err)console.log(err)
    else console.log("mongo database connected success")
});
// Activite
// GET-all
app.get("/activite",(req:Request,resp:Response)=>{
    Activite.find((err:any,activites:any)=>{
    if (err) resp.status(500).send(err);
    else resp.send(activites);
    });
});

// GET_ID
app.get("/activite/:id", (req: Request, resp: Response) => {
    Activite.findById(req.params.id, (err: any, activites: any) => {
        if (err) resp.status(500).send(err);
        else resp.send(activites);
    })
});
app.put("/activite/:id",(req:Request,resp:Response)=>{
    Activite.findByIdAndUpdate(req.params.id,req.body,(err:any)=>{
        if(err) resp.status(500).send(err);
        else resp.send("activity updated succeslully");
    })

});
app.delete("/activite/:id",(req:Request,resp:Response)=>{
    Activite.findByIdAndDelete(req.params.id,(err:any)=>
    {
        if(err) resp.status(500).send(err);
        else resp.send("activity deleted succeslully");
     })
    });
app.post("/activite",(req:Request,resp:Response)=>{
    let activite = new Activite(req.body)
    activite.save(err=>{
        if(err) resp.status(500).send(err);
        else resp.send(activite);
    })
});

//Reservation
//GETALL
app.get("/reservation", (req: Request, resp: Response) => {
    Reservation.find((err, reservations) => {
        if (err) resp.status(500).send(err);
        else resp.send(reservations);
    });

});
app.get("/reservation/:id", (req: Request, resp: Response) => {
    Reservation.findById(req.params.id, (err: any, reservations: any) => {
        if (err) resp.status(500).send(err);
        else resp.send(reservations);
    })
});
//POST
app.post("/reservation", (req: Request, resp: Response) => {
    let reservation = new Reservation(req.body)
    reservation.save(err => {
        if (err) resp.status(500).send(err);
        else resp.send(reservation);
    })
});
app.put("/reservation/:id",(req:Request,resp:Response)=>{
    Reservation.findByIdAndUpdate(req.params.id,req.body,(err:any)=>{
        if(err) resp.status(500).send(err);
        else resp.send("Reservation updated succeslully");
    })

});

app.delete("/reservation/:id",(req:Request,resp:Response)=>{
    Reservation.findByIdAndDelete(req.params.id,(err:any)=>{
        if(err) resp.status(500).send(err);
        else resp.send("Reservation deleted succeslully");
    })

});



//user

//GETALL
app.get("/users", (req: Request, resp: Response) => {
    User.find((err, users) => {
        if (err) resp.status(500).send(err);
        else resp.send(users);
    });

});
app.get("/users/:id", (req: Request, resp: Response) => {
    User.findById(req.params.userId, (err: any, users: any) => {
        if (err) resp.status(500).send(err);
        else resp.send(users);
    })
});
//POST
app.post("/users", (req: Request, resp: Response) => {
    let user = new User(req.body)
    user.save(err => {
        if (err) resp.status(500).send(err);
        else resp.send(user);
    })
});
app.put("/users/:id",(req:Request,resp:Response)=>{
    User.findByIdAndUpdate(req.params.userId,req.body,(err:any)=>{
        if(err) resp.status(500).send(err);
        else resp.send("user updated succeslully");
    })

});

app.delete("/users/:id",(req:Request,resp:Response)=>{
    User.findByIdAndDelete(req.params.id,(err:any)=>{
        if(err) resp.status(500).send(err);
        else resp.send("user deleted succeslully");
    })

});
app.get("/",(req,resp)=>
{
    resp.send("hello express")
});
app.listen(8084,()=>
{
    console.log("server started")
}); 
eurekaHelper.registerWithEureka('hotel' , 8084);