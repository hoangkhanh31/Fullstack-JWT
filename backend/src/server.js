import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
// import connection from "./config/connectDB";

const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test connection DB
// connection();

//init web routes
initWebRoutes(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
