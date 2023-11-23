import { Router } from "express";
import postController from '../controllers/Posts';
const router = Router(); 


router.get('/', postController.getAllPosts); 

router.get('/novopost', (req, res)=>{
    

    res.render('addpost');

})

router.post('/novopost', postController.createPost);

router.get('/editar/:id', postController.renderEditForm);

router.post('/editar/:id', postController.updatePost);

router.post('/excluir', postController.deletePost);

export default router;