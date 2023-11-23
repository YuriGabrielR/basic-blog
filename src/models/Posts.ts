import { sequelize } from "./database";
import Sequelize from 'sequelize'

const Postagem = sequelize.define('posts', {

    titulo:{
        type: Sequelize.STRING,
        allowNull:false
    },

    conteudo:{
        type:Sequelize.TEXT, 
        allowNull:false
    }

}); 

//Descomente a linha de código abaixo para criar uma tabela em seu banco de dados, lembre de comentar a instrução posteriormente para que não execute a cada 
// Postagem.sync({force:true}); 

export {Postagem}; 