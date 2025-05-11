import Comment from './comment.model.js'
import Publication from '../publication/publication.model.js'


export const addComment = async(req, res) => {
    try{
        const {name, content, publication} = req.body

        const publicationData = await Publication.findById(publication)

        const comment = new Comment(name, content, date, publication)

        publicationData.comments.push(
            {
                name: name,
                content: content,
            }
        )


        await comment.save()

        return res.status(201).send(
            {
                success: true,
                message:'Comment saved successfully'
            }
        )
    }catch (error){
        console.error(error)
        return res.status(404).send(
            {
                success:false,
                message:'Internal Error'
            }
        )
    }
}


//Get Comment

export const getComment = async(req, res) => {
    try{
        const comments = await Comment.find()

        if(!comments){
            return res.status(404).send(
                {
                    success:false,
                    message: 'Not found comments'
                }
            )
        }

        return res.status(200).send(
            {
                success:true,
                message: 'Comments found: ',
                comments
            }
        )
        
    }catch (error){
        console.error(error)
        return res.status(404).send(
            {
                success: false,
                message:'Internal error'
            }
        )
    }
}

//Get Comments by Publication
export const getCommentByPublication = async(req, res) => {
    try{
        const idPublication = req.body
    
        const comments = await Comment.find({
            publication: idPublication
            }
        )
    
    
        return res.status(200).send(
            {
                success: true,
                message: 'Comments found: ',
                comments
            }
        )

    }catch(error){
        console.error(error)
        return res.status(500).send(
            {
                success: false,
                message: 'Internal error',
                error
            }
        )
    }
}