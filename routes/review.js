const express=require("express");
const router= express.Router({mergeParams:true});
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const wrapasyc = require("../utils/wrapasyc.js");
const { listingSchema } = require("../schema.js");
const isLoggedIn = require("../middleware.js");
const reviewController=require("../controllers/reviews.js");
const isreviewauthor =async(req,res,next)=>{
    let { id,reviewId } = req.params;
    let review= await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","Only Author can Make changes to Reviews");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

// Reviews
router.post("/",isLoggedIn, reviewController.createReview);
  // Delete Review Route
  router.delete("/:reviewId", isLoggedIn,isreviewauthor,wrapasyc(reviewController.destroyReview));
  module.exports=router;