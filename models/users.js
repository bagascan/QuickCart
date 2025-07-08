import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
_id: {type: String, required: true},
name: {type: String, required: true},
email: {type: String, required: true, unique},
imageUrl: {type: String, required: true},
cartItem: {type: Object, default: {}}

}, {timestamps: true, minimize: false})

const user = mongoose.models.user || mongoose.model('user', userSchema)

export default user