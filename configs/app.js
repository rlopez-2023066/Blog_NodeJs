'use strict'

import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import publicationRoutes from './../src/publication/publication.routes.js'
import commentsRouter from '../src/comment/comment.routes.js'

const configs = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

const routes = (app) => {
    app.use('/v1/publication', publicationRoutes)
    app.use('/v1/comment', commentsRouter)
}

export const initServer = () => {
    const app = express()
    try{
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Servidor ejecutándose en el puerto ${process.env.PORT}`) 

    }catch (error){
        
        console.error('Error en el Servidor', error)
    }
}