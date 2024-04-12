const mongoose =require('mongoose');
const RemainderSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    recepientEmail:{
        type:String,
        required:true
    },
    status:{
        type: String,
        enum : ['PENDING','SUCCESS','FAILED'],
        default: 'PENDING',
        // required:true
    },

},{timestamps:true});
const Remainder=new mongoose.model('Remainder',RemainderSchema);
module.exports=Remainder;
