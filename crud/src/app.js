const express = require("express");
require("./db/conn");
const userRouter = require("./routers/user");


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());  // to get data as json from postman
app.use(userRouter);


app.listen(port,()=>{
    console.log(`connection setup at ${port}`);
})