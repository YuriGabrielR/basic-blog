import { Postagem } from "../models/Posts";
import { Request, Response } from 'express';

class PostController {

  getAllPosts(req: Request, res: Response) {

    Postagem.findAll().then(async (posts) => {
      
     await res.render('home', { posts });

    }).catch((err) => {

      console.log('Ocorreu algum erro na captura dos posts');
    })

  } 


  async createPost(req: Request, res: Response) {
    const { titulo, conteudo } = req.body;

    try {

       Postagem.create({
        titulo: titulo,
        conteudo: conteudo
      });

      await res.status(201).redirect('/');


    } catch (err) {

      console.log(`erro ao postar: ${err}`);
      res.status(500).send('Erro de servidor, tente novamente');
    }


  }

    async renderEditForm(req: Request, res: Response){

    const idPost = req.params.id;
    const post = await Postagem.findOne({
      where:{
        id: idPost
      }
    }); 

    res.render('editform', {post});

  }
 


  async updatePost(req: Request, res: Response) {

    const postId = req.params.id;
    const {new_titulo, new_conteudo} = req.body; 

    try{

      await Postagem.update({titulo: new_titulo, conteudo: new_conteudo}, {
        
        where: {id:postId}
      
      
      });

      res.redirect('/');

    } catch(err){

      console.log(`Erro ao atualizar: ${err}`); 
      res.status(500).send('Erro interno em nosso servidor, tente novamente');

    }
  }

  async deletePost(req: Request, res: Response) {

    const { id } = req.body;

    try {

      Postagem.destroy({ where: { id: id } });
      await res.redirect('/');

    } catch (err) {

      console.log(`Erro ao tentar excluir: ${err} `);
      res.status(500).send('Erro de servidor, tente novamente!');
    }


  }
}

export default new PostController();
