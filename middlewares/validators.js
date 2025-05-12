import { 
    body 
} from 'express-validator'

import{
    validateErrors,
    validateErrorsWithoutFiles
} from './validate.error.js'

import {
    notRequiredField,
    validateExistPublication,
    validateExistComment
} from './../utils/db.validator.js'

export const validateRegisterPublication = [ 
 
    body('title')
    .notEmpty()
    .withMessage('Title cannot be empty'),

    body('content')
    .notEmpty()
    .withMessage('Content cannot be empty'),

    body('curse')
    .notEmpty()
    .withMessage('Curse cannot be empty'),

    validateErrors
]

export const validateDeletePublication = [
    body('id')
    .notEmpty()
    .custom(validateExistPublication),

    validateErrors
]

export const validateUpdatePublication = [
    body('id')
    .notEmpty()
    .custom(async (id) => {
            await validateExistPublication(id); 
        }),
    body('title')
    .optional()
    .notEmpty()
    .withMessage('Title cannot be empty'),

    body('content')
    .optional()
    .notEmpty()
    .withMessage('Content cannot be empty'),

    body('curse')
    .optional()
    .notEmpty()
    .withMessage('Curse cannot be empty'),

    body('date')
    .optional()
    .notEmpty()
    .custom(notRequiredField),

    body('comments')
    .optional()
    .notEmpty()
    .custom(notRequiredField),

    validateErrorsWithoutFiles

]

export const validateRegisterComment = [
    body('name')
    .notEmpty()
    .withMessage('You cant leave the name empty'),

    body('content')
    .notEmpty()
    .withMessage('You cant leave the content empty'),

    body('publicationId')
    .notEmpty()
    .withMessage('You cant leave the publicationId empty')
    .custom(async (publicationId) => {
            await validateExistPublication(publicationId); 
    }),
    
    validateErrors
]

export const validateCommentByPublication = [
    body('idPublication')
    .notEmpty()
    .withMessage('You cant leave the idPublication empty')
    .custom(async (idPublication) => {
            await validateExistPublication(idPublication); 
    }),

    validateErrors
]

export const validateDeleteComment = [
    body('id')
    .notEmpty()
    .withMessage('You cant leave the ID empty')
    .custom(async (id) => {
            await validateExistComment(id); 
    }),

    validateErrors
]

export const validateUpdateComment = [
    
    body('id')
    .notEmpty()
    .withMessage('ID cannot be empty')
    .custom(async (id) => {
            await validateExistComment(id); 
    }),

    body('name')
    .optional()
    .notEmpty()
    .withMessage('Name cannot be empty'),

    body('content')
    .optional()
    .notEmpty()
    .withMessage('Content cannot be empty'),

    body('date')
    .optional()
    .custom(notRequiredField),
    
    body('publication')
    .optional()
    .custom(notRequiredField),

    validateErrors

]

