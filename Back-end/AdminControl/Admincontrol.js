import jwt from 'jsonwebtoken';
import { Adminmodel, Claimhistorymodel, coupenModel } from '../Models/DataModels.js';
import cookieParser from 'cookie-parser';



// creating for admin login Api

const adminLogin = async (req , res) => {

    try {

        const {email , password} = req.body;
        
        if (!email || !password) {
            res.json({success:false, message : "all details Required.."}) 
        }
        
       if (email ==="Appusingh423@gmail.com" && password === "123456thamizh@A"){
        const token = jwt.sign(email+password ,"thamizhvalavan")
        res.json({success:true , token})
       }else{
        console.log("Not sure");
        res.json({success:false,message:"Try after sometime"})
       }

       const data = {email,password}
       const newdata = new Adminmodel(data)

       await newdata.save();
        
    } catch (error) {
        console.log("Not sure");
        res.json({success:false,message:"Try after sometime log"})
        
        
    }
}

// add and update coupens

const coupen = async (req, res) => {
    const { code } = req.body;
    const newCoupon = new coupenModel({ code, available: true });
    await newCoupon.save();
    res.json({ message: 'Coupon added successfully!' });
  }

// Get all coupen in admin panel

const Allcoupen = async (req, res) => {


    const coupenData = await coupenModel.find({});
    res.json({ success:true, coupenData})

}

// Claim Coupon with IP & Cookie Tracking

const claimcoupen = async (req, res) => {

  let lastAssignedIndex = 0;  
    const userIP = req.ip;
    const existingCookie = req.cookies;
    const cooldownTime = 3600000; // 1 hour cooldown
  
    if (existingCookie) return res.status(403).json({ message: 'Already claimed a coupon' });
  
    const recentClaim = await Claimhistorymodel.findOne({ userIP }).sort({ claimedAt: -1 });
    if (recentClaim && (Date.now() - recentClaim.claimedAt.getTime()) < cooldownTime) {
      return res.status(403).json({ message: 'You can claim only once per hour' });
    }
  
    const coupons = await coupenModel.find({ available: true });
    if (coupons.length === 0) return res.status(404).json({ message: 'No coupons available' });
  
    const coupon = coupons[lastAssignedIndex % coupons.length];
    lastAssignedIndex++;
    
    res.cookie('claimed', true, { maxAge: cooldownTime, httpOnly: true });
    coupon.available = false;
    await coupon.save();
  
    await Claimhistorymodel.create({ userIP, couponCode: coupon.code, claimedAt: new Date() });
  
    res.json({ message: 'Coupon claimed successfully!', code: coupon.code });
  }

  // View Claim History
const ClaimHistory= async (req, res) => {
    const claims = await Claimhistorymodel.find().sort({ claimedAt: -1 });
    res.json({ success:true, claims})
  }


export {adminLogin , coupen , Allcoupen, claimcoupen , ClaimHistory}