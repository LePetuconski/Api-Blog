const router = require('express').Router()

const PostController = require('./controllers/PostController')

router.get('/post', PostController.getAll)
router.get('/post/:slug', PostController.get)
router.post('/post', PostController.create)
router.put('/post/:id', PostController.edit)
router.delete('/post/:id', PostController.delete)

module.exports = router