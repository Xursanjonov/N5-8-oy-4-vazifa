import mongoose from "mongoose";
import Joi from "joi";

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    gander: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
})

export const User = mongoose.model('newproject-users', userSchema)

export const validationUsers = (body) => {
    let schema = Joi.object({
        fname: Joi.string().required(),
        lname: Joi.string().allow(""),
        username: Joi.string().required(),
        password: Joi.string().required(),
        age: Joi.number().required(),
        url: Joi.string().required(),
        gander: Joi.string().required(),
        isActive: Joi.boolean().required(),
        email: Joi.string().required(),
        budget: Joi.number().required(),
    })

    return schema.validate(body)
} 