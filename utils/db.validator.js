import Publication from '../src/publication/publication.model.js'
import Comment from '../src/comment/comment.model.js'





export const notRequiredField = (value, { path }) => {
    if (value !== undefined && value !== null) {
        throw new Error(`The field '${path}' should not be sent in the request body`);
    }
}


export const validateExistPublication = async (id) => {
    const publication = await Publication.findById(id);
    if (!publication) {
        throw new Error('Publication not found.'); // Lanza un error si no se encuentra
    }
}

export const validateExistComment = async(id) => {
    const comment = await Comment.findById(id)
    if(!comment) {
        throw new Error('Comment not found')
    }
}