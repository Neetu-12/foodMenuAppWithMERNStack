import Foodstorage from "../models/FoodStorage.js";



export const getFoodtype = async (req, res) => {
  try {
    const { foodtype } = req.params;

    console.log("Food Type 👉", foodtype);

    // const foods = await Foodstorage.find({ foodtype });
    const foods = await Foodstorage.find({
      foodtype: { $regex: new RegExp(`^${foodtype}$`, "i") }
    });

    console.log(foods, "Getfoods...");

    res.status(200).json(foods);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
