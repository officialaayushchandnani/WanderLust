const Listing=require("../models/listing");
const Review= require("../models/review");
module.exports.createReview = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            return res.status(404).send("Listing not found");
        }
  
        
        const newReview = new Review( req.body.review);
        newReview.author=req.user._id;
        console.log(newReview);
        listing.reviews.push(newReview);
        await newReview.save();
  
        
        await listing.save();
  
        console.log("New Review Saved");
        req.flash("success","New Review Created");
        res.redirect(`/listings/${listing._id}`)
    } catch (error) {
        console.error("Error saving review:", error);
        res.status(500).send("Error saving review");
    }
  };
  module.exports.destroyReview=async (req,res) =>{
    let {id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted");
    res.redirect(`/listings/${id}`)
  };