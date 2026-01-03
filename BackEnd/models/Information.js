import mongoose from "mongoose";

const informationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  type: {
    type: String, // e.g., "about", "contact", "policy", etc.
    required: true,
    trim: true,
  },
  imageURL: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Information = mongoose.model("Information", informationSchema);

export default Information;
