const {Schema,model} = require("mongoose");

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: true,
    }
},{timestamp:true});

const Contact = model("contact", contactSchema);
module.exports = Contact