const mongoose = require("mongoose");
const Signupscheme = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmpassword: {
      type: String,
      required: true,
    },
})
    // now we need to create collection Reigister  first letter is always Capital
const Register = new mongoose.model("Register", Signupscheme); //Register used database collection name and add empolyee scheme which we publish on front page
// now export  then pass collection wala Register


module.exports=Register;