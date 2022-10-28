import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import 'dotenv/config'
import usersRoutes from './routes/users.js'
const app = express();



const PORT = 5000;
app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/',(req,res)=>{
   
    res.send("Hello there!");
});

mongoose.connect(process.env.DB_CONN,()=>{
    console.log('connected to DB')
})

app.listen(PORT, ()=>console.log(`This is running on: http//:localhost:${PORT}`));