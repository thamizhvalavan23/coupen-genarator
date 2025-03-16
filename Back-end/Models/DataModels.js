import mongoose from "mongoose";


// coupen scheema

const coupen = new mongoose.Schema({
    code: { type: String, required: true },
    available: { type: Boolean, default: true }
})

const coupenModel = mongoose.models.Coupen || mongoose.model("Coupen", coupen)

// Admin Scheema 

const Admin = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, requird: true }
})

 const Adminmodel = mongoose.models.Admin || mongoose.model("Admin", Admin)

//  Claimhistory scheema

const Claimhistory = new mongoose.Schema({
    userIP: { type: String, required: true },
    couponCode: { type: String, requird: true },
    claimedAt: { type: Date, default: Date.now }
})

 const Claimhistorymodel = mongoose.models.Claimhistorymodel || mongoose.model("Claimhistorymodel", Claimhistory)


export { Adminmodel, coupenModel, Claimhistorymodel }