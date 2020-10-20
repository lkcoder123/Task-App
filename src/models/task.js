const mongooose = require("mongoose");
const validator = require("validator");

const taskSchema = new mongooose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      required: false,
      default: false,
    },
    owner: {
      type: mongooose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
const Task = mongooose.model("Task", taskSchema);

module.exports = Task;
