import {Schema, model} from "mongoose"

const CommentSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        content: {
            type: String,
            required: true
        },

        date: {
            type: Date,
            default: Date.now
        },

        publication: {
            type: Schema.Types.ObjectId,
            ref: 'Publication',
            required: true
        }
    }
)

export default model('Comment', CommentSchema)