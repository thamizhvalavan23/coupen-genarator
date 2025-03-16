import mongoose from "mongoose";


const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://thamizhvalavan21:555666555hj@cluster0.6dvuy.mongodb.net/coupen")

    .then(()=>{
        console.log("Data Base connected..");
    })
    .catch(()=> {
        console.log("Try again..");
        
    })
}



export default connectDB ;