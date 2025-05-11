import {Router} from 'express'

import {
    addPublication,
    getPublications,
    deletePublication,
    updatePublication
} from './publication.controller.js'

import {
    validateRegisterPublication,
    validateDeletePublication,
    validateUpdatePublication
} from './../../middlewares/validators.js'

const api = Router()

//Add Publication 
api.post('/addPublication', validateRegisterPublication, addPublication)

//Get Publications
api.get('/getPublications', getPublications)

//Delete Publication
api.delete('/deletePublication', validateDeletePublication, deletePublication)

//Update Publication
api.put('/updatePublication', validateUpdatePublication, updatePublication)

export default api