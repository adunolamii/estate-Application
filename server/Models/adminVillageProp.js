const { mongoose } = require("mongoose");

const adminVillagePropSchema =  mongoose.Schema(
    {
        picture:{type: String, required:[ true, "picture is required"]},
        type:{type: String, required:[ true, "type is required"]}

},
 {timeStamps: true})
const adminVillagePropModel = mongoose.model ("adminVillagePropModel", adminVillagePropSchema)
module.exports = adminVillagePropModel