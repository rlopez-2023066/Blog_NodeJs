import { 
    body 
} from 'express-validator'

import{
    validateErrors,
    validateErrorsWithoutFiles
} from './validate.error.js'

import {
    notRequiredField,
    validateExistPublication
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
    .custom(validateExistPublication),

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