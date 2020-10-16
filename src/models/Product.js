import mongoose from 'mongoose'

const { Schema, model } = mongoose

let productSchema = new Schema(
    {
        title: String,
        body: String,
        price: Number,
        pics: [String] 
    },
    {
        timestamps: true
    }
)

export default model('Product', productSchema)