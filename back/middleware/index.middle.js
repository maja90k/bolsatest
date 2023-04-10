const util = require("util");
const multer = require("multer");
const path = require("path");
const maxSize = 2 * 1024 * 1024;
//const dirPath = path.join(__dirname, '../files/resources/static/assets/uploads/');


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,dirPath );
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

var subir = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

var uploadFileMiddleware = util.promisify(subir);
module.exports = uploadFileMiddleware;