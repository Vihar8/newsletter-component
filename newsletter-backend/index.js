import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import newsletterRoute from './routes/newsletter.js'; // Ensure to add .js if using ES modules
import userRoutes from "./routes/users.js";



dotenv.config();
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors({
  origin:"*",
  credentials: true
}
));

// Prefixing routes with /users
app.use("/users", userRoutes);


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

    app.use('/api/newsletter', newsletterRoute);

app.get("/", (req, res) => res.send("hello from express"));

app.all("*", (req, res) => res.send("that route does not exist"));

app.listen(port, () =>
  console.log(`server is listening on port: http://localhost:${port}`)
);
