import cloudinary from "../Middleware/cloudnery.js";
import Information from "../models/Information.js"; // Assuming you have an Information model
import Foodstorage from "../models/FoodStorage.js"

// POST controller — upload image and insert data
export const createInformation = async (req, res) => {
  try {
    if (req.file?.path) {
      const img = await cloudinary.uploader.upload(req.file.path);
      const imgUrl = img.secure_url;

      const newInfo = new Information({ ...req.body, imageURL: imgUrl });
      await newInfo.save();

      res.send("Information inserted successfully!");
    } else {
      res.status(400).send("The file path is not correct kindly check it.");
    }
  } catch (error) {
    console.error("Error inserting information:", error);
    res.status(500).send("Something went wrong.");
  }
};

// GET controller — get information by type
export const getInformationByType = async (req, res) => {
  try {
    const data = await Information.find({ type: req.params.type });
    res.send(data);
  } catch (error) {
    console.error("Error fetching information:", error);
    res.status(500).send("Error fetching data.");
  }
};


// add data function
export const addNewFood = async (req, res) => {
  try {
    const { foodName, foodtype, foodinfo, price, imageURL } = req.body;

    console.log(foodName, foodtype, foodinfo, price, imageURL);
    
    // Create new Items      
    const newUser = await Foodstorage.create({
      foodName,
      foodtype,
      foodinfo,
      price,
      imageURL
    });

    // Success response
    res.status(201).json({
      message: "New items added successfully!",
      newUser
    });
  } catch (error) {
    console.error("Error at the time of items add :", error);
    res.status(500).json({ message: "Items not able to add.", error: error.message });
  }
};

