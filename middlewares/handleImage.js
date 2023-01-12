const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const path = require("path");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dmyolemm9",
  api_key: "671646254267282",
  api_secret: "KOVBkLcPf0_SJpDV9v9KrwgC0TA",
});

const cloudStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: cloudStorage });

module.exports = { upload };
