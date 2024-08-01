import mongoose from "mongoose";
import Joi from "joi";

const blogschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    star: {
        type: Number,
        default: 0
    }
})

export const Blog = mongoose.model('newproject-blog', blogschema)

export const validationBlog = (body) => {
    let schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        author: Joi.string().required(),
        url: Joi.string().required(),
        gander: Joi.string().required(),
        isActive: Joi.boolean().required(),
        email: Joi.string().required(),
        budget: Joi.number().required(),
    })
    return schema.validate(body)
}