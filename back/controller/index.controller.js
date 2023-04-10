//const uploadFile = require("../middleware/index-middle");
const fs = require("fs");
const path = require("path");
const xlsxFile = require('read-excel-file/node');
const dirPath = path.join(__dirname, '../files/resources/static/assets/uploads/');
let date_ob = new Date();

const getData =  (req, res) => {
  try {
     let x = [];
     (dirPath).then((rows) => {      
      rows.forEach((col)=>{
        col.forEach((data)=>{
          x = data;
          res.status(200).send(x);
        })
      });
    });
  } catch(err) {
    console.log(err);
    res.status(500).send({
      message: `Error al obtener data. ${err}`,
    });
  }
}






module.exports = {
  //exportamos funciones
  getData,
};