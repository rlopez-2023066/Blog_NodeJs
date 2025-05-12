import {Router} from 'express'

import {
    addComment,
    getComment,
    getCommentByPublication,
    deleteComment,
    updateComment   
} from './comment.controller.js'

import {
    validateRegisterComment,
    validateCommentByPublication,
    validateDeleteComment,
    validateUpdateComment
} from './../../middlewares/validators.js'

const api = Router()

//Add Comment
api.post('/addComment', validateRegisterComment, addComment)

//Get Comment
api.get('/getComments', getComment)

//Get Comment By Publication 
api.get('/getCommentByPublication', validateCommentByPublication, getCommentByPublication)

//Delete Comment
api.delete('/deleteComment', validateDeleteComment, deleteComment)

//Update Comment
api.put('/updateComment', validateUpdateComment, updateComment)

export default api