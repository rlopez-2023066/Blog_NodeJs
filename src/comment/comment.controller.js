import Comment from './comment.model.js'
import Publication from '../publication/publication.model.js'


export const addComment = async(req, res) => {
    try{
        const {name, content, publicationId} = req.body

        const publicationData = await Publication.findById(publicationId)

        const comment = new Comment({name, content, publication: publicationId})

        publicationData.comments.push(
            {
                name: name,
                content: content,
            }
        )

        await publicationData.save()


        await comment.save()

        return res.status(201).send(
            {
                success: true,
                message:'Comment saved successfully',
                comment
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
        const {idPublication} = req.query

    
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

//Delete Comment
export const deleteComment = async(req, res) => {
    try{
        const {id} = req.body

        await Comment.findByIdAndDelete(id)

        return res.status(200).send(
            {
                success: true,
                message: 'Comment deleted successfully'
            }
        )
    }catch(error){
        console.error(error)
        return res.status(500).send(
            {
                sucess:false,
                message: 'Internal Error'
            }
        )
        
    }
}

//Update Comment
export const updateComment = async(req, res) => {
    try{
        const {id, ...data} = req.body

        const comment = await Comment.findByIdAndUpdate(
            id, 
            data,
            {new: true}
        )
        
        return res.status(201).send(
            {
                success: true,
                message: 'Publication updated successfully',
                comment
            }
        )


    }catch(error){
        console.error(error);
        return res.status(500).send(
            {
                success:false,
                message: 'Internal Error'
            }
        )
    }
}