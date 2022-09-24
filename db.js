const mongoose = require('mongoose');

const dbString = 'mongodb+srv://ernestma:123Pin456@cluster0.zykvsuy.mongodb.net/recruitment?retryWrites=true&w=majorityc';

const connectDB = async ()=>{

    const conn = await mongoose.connect(dbString,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });

    console.log('database connected: info'+conn.host)
}

module.exports = connectDB;
