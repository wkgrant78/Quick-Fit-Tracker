const mongoose = require("mongoose");

const schema = mongoose.schema;

const workoutschema = new Schema( 
    {
            day: {
                type: Date,
                default: Date.now
            },
            exercise: [
                {
                type: {
                    type: String,
                    trim: true,
                    required: "You must select an exercise type."
                },
                name: {
                    type: String,
                    trim: true,
                    required: "What exercise did you do?"
                },
                duration: {
                    type: Number,
                    required: "How long do you exercise?"
                },
                weight: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                distance: {
                    type: Number,
                },
            }
        ]
    },
    {
        // sets the virtual field to be displayed on client side via mongoose
        // https://mongoosejs.com/docs/guide.html#toJSON
        toJSON: {
            virtuals: true
        }
    }
);

// https://mongoosejs.com/docs/tutorials/virtuals.html
workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => 
    {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;