const Post = require('../models/post') 
const slugify = require('slugify')

class PostController {

   async get(req, res){ //usar para o slug | pegar um post

        const response = await Post.findOne({ where: {slug: req.params.slug}})
            
        if (response == null) { 
            return res.status(404).json({ status: false, erro: 'Post not found'})
        }
        return res.status(200).json({ status: true, response})
    }

    async getAll(req, res){ //pegar todos os posts
        const response = await Post.findAll({ order: [['createdAt', 'DESC']], raw: true })
        

        if (response.length == 0){ 
            return res.status(404).json({ status: false, erro: 'Post not found'})
        }
        return res.status(200).json({ status: true, response})
    }

    async create(req, res){

        const { title, content, userAuthor, image, description} = req.body

        try{
            const response = await Post.create({ title, content, userAuthor, image, slug: slugify(title, {lower: true}), description})//vai converter o title em slug - slugify é uma função
            return res.status(200).json({ status: true, response })
        } catch (error) {
            return res.status(400).json({ status: false, error })
        }
    }

    async edit(req, res){
        const {title, content, userAuthor, image, description} = req.body 

        try{
            const response = await Post.update(
                { title, content, userAuthor, image, slug: slugify(title, {lower: true}), description },
                { where: { id: req.params.id }} 
            )
            return res.status(200).json({ status: true, response })
        } catch (error){
            return res.status(400).json({ status: false, error})
        }
    }

    async delete(req, res){
        try{
            const response = await Post.destroy({ where: { id: req.params.id }})
            return res.status(200).json({ status: true, response })
        } catch (error){
            return res.status(400).json({ status: false, error })
        }
    }
}

module.exports = new PostController()