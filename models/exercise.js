const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String
    },
    name: {
        type: String
    },
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;