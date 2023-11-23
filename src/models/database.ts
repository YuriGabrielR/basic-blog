import {Sequelize} from 'sequelize'; 
import 'dotenv/config'

const sequelize = new Sequelize({
    host:process.env.DB_HOST,
    dialect:process.env.DB_DIALECT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,

} );


sequelize.authenticate().then(()=>{

    console.log(`⚡ Conectado com o banco de dados!`);


}).catch((err)=>{

    console.log(` 😥A conexão falhou: ${err}`);

});


export {sequelize};