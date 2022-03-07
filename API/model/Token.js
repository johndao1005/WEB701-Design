const {Schema,model} = require("mongoose");

const tokenSchema = new Schema({
    expiredDate: {
        type: DateTime,
        required: true,
    },
    isClaimed: {
        type: String,
        required: true,
        default:false}
},{timestamp:true});

const Token = model("token", tokenSchema);
module.exports = Token