import express from 'express';
import cors from "cors";
import connectDB from './ConfigDB/Config.js';
import "dotenv/config";
import adminRouter from './Routers/Apirouter.js';


const App = express();

// App use
App.use(express.json());
App.use(cors());
connectDB();

// Api End Point

App.use("/api/admin" , adminRouter);

App.get('/' , (req, res) => {
    res.send("Api Working SuccesFully...")
    res.end()
})

// App server Running

const Port =process.env.port || 8000;

App.listen(Port , ()=>{
    console.log(`Server Running on: http://localhost:${Port}/`)
} )
