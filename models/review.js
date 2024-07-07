// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const reviewSchema=new Schema({
//     Comment:{
//         type:String,
        
//     },
//     Rating:{
//         type:Number,
//         min:1,
//         max:5,
        
//     },
//     createdAt:{
//         type:Date,
//         default:Date.now()
//     },
// })

// const Review = mongoose.model("Review", reviewSchema);
// module.exports = Review;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: {
        type: String,
        required: true // Comment is required
    },
    rating: {
        type: Number,
        required: true, // Rating is required
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author:{
        type: Schema.Types.ObjectId,
        ref:"User",
    }
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;