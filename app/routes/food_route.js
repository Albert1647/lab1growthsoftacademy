var express = require("express"); //api management
var router = express.Router();    
let Food = require("../models/food_model.js");

router.post("/food/", function(request, response) {
    // console.log("REQUEST GET!!");
    console.log(request.body);
  
    let food = new Food(); //instantiate
    console.log(food);
    food.name = request.body.foodName;            // food from api in this variable
  
    console.log(parseFloat(request.body.calory)); //validation

    if (isNaN(parseFloat(request.body.calory)))
      response.status(500).send({ message: "calory is not a number" }); // check if number
    else {
      food.calory = request.body.calory;  
      food.save(function(err, mgResponse) {
        if (err) response.status(500).send({ message: err });
        else {
          console.log("SAVE COMPLETE");
          // console.log(response);
          response.send(mgResponse);
        }
      });
    }
  });

  module.exports = router;