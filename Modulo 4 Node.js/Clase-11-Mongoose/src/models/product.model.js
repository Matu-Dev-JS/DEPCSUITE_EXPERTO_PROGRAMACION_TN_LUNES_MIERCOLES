import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
        fk_owner_id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false,
            default: ''
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        stock:{
            type: Number,
            required: true,
            default: 0
        },
        created_at: {
            type: Date,
            default: Date.now,
            required: true
        },
        category: {
            type: String,
            enum: ['Electronics', 'Clothing', 'Books', 'Home', 'Toys', 'Other'],
        }
    }
)

const Product = mongoose.model('Product', productSchema)
export default Product