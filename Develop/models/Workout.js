const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: { type: Date, default: () => Date.now() },

    exercises: [
      {
        type: { type: String, required: true },
        name: { type: String },
        duration: { type: Number },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number },
        distance: { type: Number },
      },
    ],
  },
  { toJSON: { virtuals: true } }
);



WorkoutSchema.virtual("totalDuration").get(function () {
  var totalResult = 0;
  for (var i = 0; i < this.exercises.length; i++) {
    totalResult += this.exercises[i].duration;
  }
  return totalResult;
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
