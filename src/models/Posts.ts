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

//o comando abaixo cria a tabela posts em seu banco de dados:
// Postagem.sync({force:true}); 

export {Postagem}; 