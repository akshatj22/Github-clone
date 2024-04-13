import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import userRoutes from './Routes/user.route.js';
import exploreRoutes from './Routes/explore.route.js';
import authRoutes from './Routes/auth.route.js';
import path from 'path';
import connectMongoDB from './db/connectMongoDB.js';
import "./passport/github.auth.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000
const __dirname = path.resolve();
console.log("dirname", __dirname);
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
// app.get('/', (req, res) => {
//     res.send('Server is ready');
// })
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})



// http://localhost:5000 both run the client and the server

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
    connectMongoDB();
});