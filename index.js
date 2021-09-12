const express = require("Express");
const db = require("./mongodb");
const userRouter = require("./routes/userroute");
const volumeRouter = require("./routes/volumeroute");
const temp = require("./functions/userFunc");


const PORT = process.env.PORT || 3000;

const app = express();

//Routes the request to the user route.
app.use("/users",userRouter);
//Routes the request to the volume route.
app.use("/volumes",volumeRouter);




db.connect(() => {
    app.listen(PORT, function (){
        console.log(`Listening on PORT#${PORT}`);
    });
});

