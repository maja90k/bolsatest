//*
//Index.js
//se definen las rutas que se ocuparan 
//y seleccionamos los metodos a ocupar (download upload y el get).
//*/
const express = require("express");
const router = express.Router();
const controller = require("../controller/index.controller");

let routes = (app) => {
  //router.post("/postearData", controller.upload);
  router.get("/obtenerData", controller.getData);
  app.use(router);
};

module.exports = routes;