import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './Routes/user.route.js';
dotenv.config();
 const app = express();
 app.get('/', (req, res) => {
    res.send('Server is ready');    
})
app.use("/api/users",userRoutes);

 app.listen(5000, () => {
    console.log('Server Running on port 5000')
});