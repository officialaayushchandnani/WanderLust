
const express = require("express");
const router = express.Router();

const wrapasync = require("../utils/wrapasyc.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage })
const isLoggedIn = require("../middleware.js");
const isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "Only Owner can Make changes to Listings");
        return res.redirect(`/listings/${listing._id}`);
    }
    next();
};

const listingController = require("../controllers/listings.js");
const { render } = require("ejs");
router.route("/")
    .get(wrapasync(listingController.index))
    .post(isLoggedIn, upload.single('listing[image]'),wrapasync(listingController.createListing));
   
// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
    .get(wrapasync(listingController.showListing))
    .put(
        isOwner,
        isLoggedIn,upload.single('listing[image]'),
        wrapasync
            (listingController.updateListings))
    .delete(isLoggedIn, isOwner, wrapasync(listingController.destroyListings));
// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapasync(listingController.renderEdit));
module.exports = router;
