const {Schema,model} = require("mongoose");

const orderSchema = new Schema({
    itemName: {
        type: String,
        required: true,
        default : {}
    },
    contactDetails: {
        type: Number,
        required: true,
    },
    isDelivery: {
        type:Boolean,
        required: true,
    },
    isCompleted: {
        type:Boolean,
        required: true,
        default: false
    }
},{timestamp:true});

const Order = model("order", orderSchema);
module.exports = Order