const mongoose = require ("mongoose");
const Schema = mongoose.Schema;


const WeddingSchema = new Schema ({
    bride_first_name:{
        type: String
    },
    bride_last_name:{
        type:String
    },
    groom_first_name:{
    type:String 
    },
    groom_last_name:{
        type:String
    },
    wedding_date:{
        type:Date,
        default:Date.now
    },
    venue:{
        type:String
    },
    menu:{
        type:[String]
    },
    pics:{
        type:String
    },
    // guests:[
    //     {
    //         type:Schema.Types.ObjectId,
    //         ref:"Guest"
    //     }
    // ]
guests:[{
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    rsvp:{
        type:Boolean
    },
    menu_choice:{
        type:String
    }
}]


})


const Wedding = mongoose.model("Wedding", WeddingSchema);
module.exports=Wedding 