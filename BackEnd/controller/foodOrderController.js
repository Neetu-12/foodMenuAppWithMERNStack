import FoodOrder from "../models/FoodOrder.js";

export const createFoodOrder = async (req, res) => {
  try {
    const newOrder = new FoodOrder(req.body);
    // console.log(newOrder,".......");
    
    await newOrder.save();
    res.status(201).send("Food ordered successfully!");
  } catch (error) {
    console.error("Error at the time of food order:", error);
    res.status(500).send("Error inserting food order");
  }
};
