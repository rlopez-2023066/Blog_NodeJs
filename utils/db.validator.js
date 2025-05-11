import Publication from '../src/publication/publication.model.js'






export const notRequiredField = (value, { path }) => {
    if (value !== undefined && value !== null) {
        throw new Error(`The field '${path}' should not be sent in the request body`);
    }
}



export const validateExistPublication = (req, res, next) => {
    const {id} = req.body

    if(!Publication.findById(id)){
        return res.status(400).send(
            {
                success: false, 
                message: 'Publication not found.'
            }
        )
    }
}