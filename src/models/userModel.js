import mongoose from "mongoose";
const userModelSchema = mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
    },
    role: {
        type: String,
        enum: {
          values: ['Admin', 'User', 'Student', 'Frontend Desk', 'Teacher', 'Data Entry Operator', 'Management'],
          message: 'Role must be one of Admin, User, Student, Frontend Desk, Teacher, Data Entry Operator, Management'
        },
        default: 'User'
    },
    status: { 
        type: String,
        enum: {
          values: ['Blocked', 'Active', 'Pending' , 'inReview'],
          message: 'Approval status must be one of Blocked, Active, Pending, inReview'
        },
        default: 'Pending'
      }, 
      isVerified: {
        type: Boolean,
        default: false
      },
      resetPasswordToken:{
        type:String
      },
      resetPasswordExpires:{
        type : Date
      },
      isVerifiedToken:{
        type:String
      },
      isVerifiedExpires:{
        type : Date
      } 
} ,{
    timestamps : true
})


export default mongoose.models.User || mongoose.model('User' , userModelSchema)