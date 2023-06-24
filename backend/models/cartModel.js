import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'User' 
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true
            }
        }
    ]
})

export const Cart = mongoose.model('Cart', cartSchema);