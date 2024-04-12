import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './Routes/user.route.js';
import exploreRoutes from './Routes/explore.route.js';
dotenv.config();
 const app = express();
 app.get('/', (req, res) => {
    res.send('Server is ready');    
})
app.use(cors());
app.use("/api/users",userRoutes);
app.use("/api/explore",exploreRoutes);

 app.listen(5000, () => {
    console.log('Server Running on port 5000')
});