import express from "express";
import 'dotenv/config'
import router from "./src/routes/routes";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
server.set('view engine', 'ejs');
server.use(bodyParser.urlencoded({extended:true}));
server.use(router);
server.use(express.static(path.join(__dirname, 'public'))); 



server.listen({

    port: process.env.PORT

}, ()=> console.log(' ⚡ Servidor rodando'));

