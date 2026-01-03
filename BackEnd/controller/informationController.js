import cloudinary from "../Middleware/cloudnery.js";
import Information from "../models/Information.js"; // Assuming you have an Information model

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
