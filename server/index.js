const express = require("express");
const app = express();
const mongoose = require("mongoose"); // you have to create a mongodb atlas cluster
const dotenv = require("dotenv");
const cors = require("cors");

const authRoute = require("./routes/auth");
const bookRoute = require("./routes/books");
const reviewRoute = require("./routes/reviews");
const userRoute = require("./routes/users");


//  to enable process.env variables
dotenv.config();

//  standard connection method from specification
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    //  to see that db is connected
    .then(() => console.log("DB is connected!"))
    .catch((err) => console.log(err))
;

// to be able to except requests in json. In Postmaster, we pick Body-raw-json
app.use(express.json());


const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration


//  if you're making a request - use this end point, which leads to this route
app.use("/auth", authRoute)
app.use("/books", bookRoute)
app.use("/reviews", reviewRoute)
app.use("/users", userRoute)


//  to run the server
app.listen(8000, () => {
    console.log("Back-end server is running")
})


