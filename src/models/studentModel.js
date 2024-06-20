import mongoose from "mongoose";

const studentModelSchema = mongoose.model({
    
})

export default mongoose.models.Student || mongoose.model("Student" , studentModelSchema)