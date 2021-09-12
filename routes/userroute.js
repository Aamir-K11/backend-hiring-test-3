const express = require("Express");
const Userfunc = require("../functions/userFunc");
const userRouter = express.Router();

userRouter.use(express.json());

userRouter.post("/addUser",(req,res)=>{
    Userfunc.addUser(req.body);
    res.send({"Status":"Successful"});
});

userRouter.post("/getUser",(req,res)=>{
    Userfunc.getUser(req.body);
    res.send({"Status":"Successful"});
});

userRouter.post("/addBookShelf",(req,res)=>{
    Userfunc.addBookShelf(req.body.user,req.body.bookshelf);
    res.send({"Status":"Successful"});
});


userRouter.post("/removeBookShelf",(req,res)=>{
    Userfunc.removeBookShelf(req.body.user,req.body.bookshelf);
    res.send({"Status":"Successful"});
});


userRouter.post("/addToShelf",(req,res)=>{
    Userfunc.addToBookShelf(req.body.user,req.body.bookshelf,req.body.volume);
    res.send({"Status":"Successful"});
});

userRouter.post("/giveReview",(req,res)=>{
    Userfunc.giveReview(req.body.user,req.body.volume,req.body.review);
    res.send({"Status":"Successful"});
});


userRouter.post("/updatePos",(req,res)=>{
    Userfunc.updateReadingPos(req.body.user,req.body.shelf,req.body.volume,req.body.pos);
    res.send({"Status":"Successful"});
});

module.exports = userRouter;