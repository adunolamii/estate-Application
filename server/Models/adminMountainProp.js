const { mongoose } = require("mongoose");

const adminMountainPropSchema =  mongoose.Schema(
    {
        picture:{type: String, required:[ true, "picture is required"]},
        type:{type: String, required:[ true, "type is required"]}

},
 {timeStamps: true})
const adminMountainPropModel = mongoose.model ("adminMountainPropModel", adminMountainPropSchema)
module.exports = adminMountainPropModel