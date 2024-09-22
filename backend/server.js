const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { generateMeta } = require("./controllers/aiController");
const UserRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use((req,res,next) => {
    console.log(req.method, req.path);
    next();
});

app.use(cors());
app.use("/api/user/", UserRoutes);
app.post("/api/aiprompt", generateMeta);

mongoose.connect(process.env.DB_ACCESS)
.then(() => {
  app.listen(4000, () => {
    console.log("Cors enabled web server, connected to db and listening to port 4000");
  });
})
.catch((err) => {console.log(err)});


