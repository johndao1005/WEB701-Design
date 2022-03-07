const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    email: {
        type: DateTime,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    loginAttempt: {
        type: Number,
        required: true,
        default: 3
    },
    phoneNumber: {
        type: String,
        required: false,
    },
    isStaff: {
        type: String,
        required: true,
    },
},{timestamp:true});

const User = model("user", userSchema);
module.exports = User