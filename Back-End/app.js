require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var cors = require('cors')

const app = express();


//routes imports
const authRoutes = require("./routes/auth")


//DB Connection
const dbUrl = process.env.DBURL;
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose.connect(dbUrl, connectionParams).then(()=>{
    console.log("DB CONNECTED");
})
.catch((e) => {
    console.log("Error:" + e);
})


//Middlewares
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());


//My Routes
app.use("/api", authRoutes)
app.get('/subscribe',(_, res)=>{
    res.send('subsc to cules')
})


//PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app is running at ${port}`);
})