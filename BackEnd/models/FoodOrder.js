import mongoose from "mongoose";

const foodOrderSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // reference to User model
      required: true,
    },
    foodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Foodstorage", // reference to Foodstorage model
      required: true,
    },
    price: {
      type: String,
      required: false,
      trim: true,
    },
    create_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false, // disable Mongoose's auto timestamps
  }
);

//
// Auto-increment ID (similar to Knex 'increments')
//
foodOrderSchema.pre("save", async function (next) {
  if (this.isNew) {
    const lastOrder = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
    this.id = lastOrder ? lastOrder.id + 1 : 1;
  }
  next();
});

const FoodOrder = mongoose.model("FoodOrder", userSchema);

export default FoodOrder; 