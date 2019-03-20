const dotenv = require("dotenv");
dotenv.load();
const router = require("express").Router();
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();
const cloudinary = require("cloudinary").v2;

const db = require("../../models");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

router.route("/api/add_image").post(function(req, res) {
  multipartMiddleware(req, res, () => {
    // file was not uploaded redirecting to upload
    if (!req.files) {
      res.redirect("/home");
      return;
    }

    var imageFile = req.files.image.path;
    // Upload file to Cloudinary
    cloudinary.uploader
      .upload(imageFile, { tags: "express_sample" })
      .then(image => {
        console.dir(image);
        db.Auths.update(
          { avatar: image.secure_url },
          { where: { id: req.user.id } }
        ).then(() => {
          res.redirect("/home");
        });
      });
  });
});

module.exports = router;
