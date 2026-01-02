//Imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");
const methodOverride = require('method-override');

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))


// Connecting the database
main().then(()=>{
    console.log("Connection successful");
}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/stayora');
};

//listening
app.listen(8080,()=>{
    console.log("You are listening to the port: 8080.")
});

//Root route
app.get("/",(req,res)=>{
    res.send("Root is working.")
});

//listing Route
app.get("/listings",async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
})

//Create Route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new");
});
app.post("/listings",async (req,res)=>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})

//show Route
app.get("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    const list = await Listing.findById(id);
    res.render("listings/show",{list});
})


//edit Route
app.get("/listings/:id/edit",async (req,res)=>{
    let {id} = req.params;
    const list = await Listing.findById(id);
    res.render("listings/edit",{list});
})
app.put("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
});

//Delete Route
app.delete("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})