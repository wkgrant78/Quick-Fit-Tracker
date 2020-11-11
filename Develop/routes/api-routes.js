// define db
const db = require('.../models')
module.exports = (app) => {

    app.get("/api/workouts", (req, res) => {
        db.workout.find({}, (err,workouts) => {
            if(err){
                console.log(err);
            } else {
                req.json(workouts)
            }
        });
    });
    // add exercise and set id
    app.put("/api/workouts/:workout", ({ params, body }, res) =>{
        db.workout.findOneAndUpdate({ _id: params.id},
            {$push: {exercises:body }},
            { upsert: true, useFindandModify:false},
            updatedworkout => {
                res.json(updatedworkout);
            })
    });
    // post/create new workout
    app.post
}