const express = require("express");
require("./db/mongoose.js");
const Task = require("./models/task.js");
const User = require("./models/user");
const userRouter = require("./routers/user.js");
const taskRouter = require("./routers/task.js");
const bcrypt = require("bcryptjs");
const { findById } = require("./models/task.js");
const app = express();

const port = process.env.PORT;

// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload only word"));
//     }

//     cb(undefined, true);
//     // cb(new Error("file must be pdf"));
//     // cb(undefined, true);
//     // cb(undefined, false);
//   },
// });

// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ Error: error.message });
//   }
// );

//It will parse upcoming data into object
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
