

const User = require('../models/User.js');

exports.register =async(req,res,next)=>{

    var userName = req.query.userName;
    var password = req.query.password;
  
   const user = await User.create({
      username:req.query.userName,
      password:req.query.password
    });
  
    res.status(200).json({
      success:true,
      data:user
    })
}


// 
exports.login =async(req,res,next)=>{
    console.log('request comidng here')
    var userName = req.query.userName;
    var password = req.query.password;

    const user = await User.find({
        username:userName,
        password:password
    })
    console.log(user.length)

    if(user.length !==0){
        res.status(200).json({
            success:true
        })
    }else{
        res.status(200).json({
            success:false,
            error:'Invalid Credentials!'
        })
    }
}