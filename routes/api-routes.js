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

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if(err){
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });


    //PUT - used to update workout with new exercises
    app.put("/api/workouts/:id", ({ params, body }, res) => {
        console.log("hittingputroute")
        console.log("id", params.id);
        db.Workout.findByIdAndUpdate(params.id,
                                    { $push: { exercises: body } },
                                    { upsert: true, useFindandModify: false})
                                    .then(updatedWorkout => {
                                        // console.log(updatedWorkout);
                                        res.json(updatedWorkout);
                                    })
                                    .catch(error => console.error(error))
    });

    // quotesCollection.findOneAndUpdate(
    //     query,
    //     update,
    //     options
    //   )
    //     .then(result => {/* ... */})
    //     

    //POST - create a new workout
    app.post('/api/workouts', (req,res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });

}