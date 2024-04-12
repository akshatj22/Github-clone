import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import userRoutes from './Routes/user.route.js';
import exploreRoutes from './Routes/explore.route.js';
import authRoutes from './Routes/auth.route.js';
import connectMongoDB from './db/connectMongoDB.js';
import "./passport/github.auth.js"
dotenv.config();
const app = express();
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Server is ready');
})
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(5000, () => {
    console.log('Server Running on port 5000')
    connectMongoDB();
});