const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to User
      ref: "User",
      required: true,
    },
    foodItems: {
      type: String,
      required: [true, "Food item name is required"],
    },
    ratePerItem: {
      type: String,
      required: [true, "Rate per item is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false, // disable auto createdAt/updatedAt
  }
);

// Optional: auto-increment ID using pre-save hook
menuSchema.pre("save", async function (next) {
  if (this.isNew) {
    const lastMenu = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
    this.id = lastMenu ? lastMenu.id + 1 : 1;
  }
  next();
});

module.exports = mongoose.model("Menu", menuSchema);
// const food = await Foodstorage.find().populate("user_id", "name email");
