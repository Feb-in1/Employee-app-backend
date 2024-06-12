const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "id":String,
        "name":String,
        "desg":String,
        "sal":String
    }
)
let employeemodel=mongoose.model("employees",schema);
module.exports={employeemodel}