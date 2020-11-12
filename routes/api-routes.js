//define db
const db = require('../models')
module.exports = (app) => {

// CRUD - https://zellwk.com/blog/crud-express-mongodb/

    //GET - read last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if(err){
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });

    //PUT - used to update workout with new exercises
    app.put("/api/workouts/:workout", ({ params, body }, res) => {
        db.Workout.findOneAndUpdate({ _id: params.id},
                                    {$push: {exercise:body }},
                                    { upsert: true, useFindandModify:false},
                                    updatedWorkout => {
                                        res.json(updatedWorkout);
                                    })
    });

    //POST - create a new workout
    app.post('/api/workouts', (req,res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });

}