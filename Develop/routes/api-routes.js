// define db
const db = require('.../models')

module.exports = (app) => {
    // read last workout
        app.get("/api/workouts", (req, res) => {
            db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            })
    });

    // create new exercise, https://itnext.io/async-await-without-try-catch-in-javascript-6dcdf705f8b1
        app.post("/api/workouts", async (req,res) => {
            try {
                const response = await db.Workout.create ({type: "workout"})
                res.json(response);
            }
            catch(err) {
                console.log("Failed to create workout: ", err)
            }
        })

    // update existing exercise
        app.put("/api/workouts/:id", ({ body, params }, res) =>{
            console.log(body, params)
            // const workoutId = params.id;
            let savedExercises = [];

    // find most recently saved by id in current workout
        db.Workout.find({ _id: workoutId})
            .then(dbWorkout => {
            // console.log(dbWorkout)
            savedExercises = [... savedExercises, body]
            // console.log(allExercises)
            updateWorkout(allExercises)
            })
            .catch(err => {
                res.json(err);
            })

    // find a matching document, removes it, passing the found document (if any) to the callback
        function updateWorkout(exercises) {
            db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc){
                if(err) {
                    console.log(err)
                }
            })
        }
    })

    // reads (or retrieves) saved data
        app.get("/api/workouts/range", (req, res) => {
            db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
        }); 
}