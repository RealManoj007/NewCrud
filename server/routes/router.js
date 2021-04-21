const express=require('express');
const route=express.Router();
const service=require('../services/render');
const controller=require('../controller/controller');

//@Method, GetUser
route.get("/",service.homeRoutes)

//@Method, AddUser
route.get("/add-user",service.add_user)

//@Method, UpdateUser
route.get("/update-user",service.update_user)

//API
route.post('/api/users',controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id',controller.delete);
module.exports=route;