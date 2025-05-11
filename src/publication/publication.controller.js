'use strict'

import Publication from './publication.model.js'

//Add Publication
export const addPublication = async(req, res) => {
    try {
        const data = req.body

        const publication = new Publication(data)

        await publication.save()

        return res.status(201).send(
            {
                success: true,
                message: 'Publication added successfully',
                publication
            }
        )
    }catch(error){
        console.error(error)
        return res.status(500).send(
            {
                success: false,
                message: 'Internal Error',
                error
            }
        )
    }
}

//Get Publications
export const getPublications = async(req, res) => {
    try{
        const publications = await Publication.find()

        if(!publications || publications.length === 0) {
            return res.status(404).send(
                {
                    success: false,
                    message: 'No publications found'
                }
            )
        }

        return res.status(200).send(
            {
                success: true,
                message: 'Publications retrieved successfully',
                publications
            }
        )

    }catch (error){
        console.error(error)
        return res.status(500).send(
            {
                success: false,
                message: 'Internal Error',
                error
            }
        )
    }
}

//Delete Publication
export const deletePublication = async(req, res) => {
    try{
        const {id} = req.body

        const publication = await Publication.findByIdAndDelete(id)


        return res.status(200).send(
            {
                success: true,
                message: 'Publication deleted successfully'
            }
        )

    }catch (error){
        console.error(error)
        return res.status(500).send(
            {
                success: false,
                message: 'Internal Error',
                error
            }
        )
    }
}


//Update Publication
export const updatePublication = async(req, res) => {
    try{

        const {id, title, content, curse } = req.body


        const publication = await Publication.findByIdAndUpdate(
            id, 
            title,
            content,
            curse,
            {new: true}
        )

        return res.status(201).send(
            {
                success: true,
                message: 'Publication updated successfully',
                publication
            }
        )

    }catch (error){
        console.error(error)
        return res.status(500).send(
            {
                success: false,
                message: 'Internal Error',
                error
            }
        )
    }
}