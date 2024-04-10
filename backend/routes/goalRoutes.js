const express = require( 'express' );
const router = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal} = require("../controllers/goalController")

module.exports = router



router.route("/").get(getGoals).post(setGoal) // get all goals and create
router.route("/:id").put(updateGoal).delete(deleteGoal);// update a goal 
//simple version for routing to same http
// router.get("/", getGoals)
// router.post("/", setGoal)
// router.put("/:id", updateGoal)
// router.delete("/:id", deleteGoal)