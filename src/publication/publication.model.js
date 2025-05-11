//Importación de Mongoose
import {Schema, model} from "mongoose";

const publicationSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        content: {
            type: String,
            required: true,
        },

        curse: {
            type: String,
            required: true,
        },

        date: {
            type: Date,
            default: Date.now,
        },

        comments: [
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
                }
            }
        ]    
    }
)

export default model('Publication', publicationSchema)