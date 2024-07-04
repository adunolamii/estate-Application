const { mongoose } = require("mongoose");

const adminBeachPropSchema =  mongoose.Schema(
    {
        picture:{type: String, required:[ true, "picture is required"]},
        type:{type: String, required:[ true, "type is required"]}

},
 {timeStamps: true})
const adminBeachPropModel = mongoose.model ("adminBeachPropModel", adminBeachPropSchema)
module.exports = adminBeachPropModel