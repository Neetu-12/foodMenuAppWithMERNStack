import mongoose from "mongoose";

const foodStorageSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId, // Reference to User
      ref: "User",
      required: true,
    },
    foodtype: {
      type: String,
      required: [true, "Food type is required"],
      trim: true,
    },
    imageURL: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
    },
    foodName: {
      type: String,
      required: [true, "Food name is required"],
      trim: true,
    },
    foodinfo: {
      type: String,
      required: [true, "Food info is required"],
      trim: true,
    },
    price: {
      type: String,
      required: [true, "Price is required"],
      trim: true,
    },
    create_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false, // disable Mongoose's automatic timestamps
  }
);

//
// Auto-increment ID (like Knex `increments`)
//
foodStorageSchema.pre("save", async function (next) {
  if (this.isNew) {
    const last = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
    this.id = last ? last.id + 1 : 1;
  }
  next();
});

const Foodstorage = mongoose.model("Foodstorage", userSchema);

export default Foodstorage; 