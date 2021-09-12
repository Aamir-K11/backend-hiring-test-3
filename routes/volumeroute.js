const express = require("Express");
const volumefunc = require("../functions/volumeFunc");
const { volumeModel } = require("../models/volume");
const volumeRouter = express.Router();


volumeRouter.use(express.json());


volumeRouter.post("/addVolume",(req,res)=>{
    volumefunc.addVolume(req.body);
    res.send({"Status": "Successful"});
});

module.exports = volumeRouter;