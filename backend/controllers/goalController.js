//@desc Get Goals
//@route Get /api/goals

const { setgid } = require("process")

//@access Private
const getGoals = (req,res)=>{
    res.status(200).json({"message":"Get Goals"})
}

//@desc Set Goals
//@route POST /api/goals
//@access Private
const setGoal = (req,res)=>{
    console.log(req.body)
    if (!req.body.text){
        res.status(400)
        throw new Error("please add a text field")
    }
    res.status(200).json({"message":"Set Goals"})
}

//@desc Update Goals
//@route PUT /api/goals/:id
//@access private
const updateGoal = (req,res)=>{
    res.status(200).json({message: `Update Goals ${req.params.id}`})
}
//@desc Delete Goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoal = (req,res)=>{
    res.status(200).json({message: `Update Goals ${req.params.id}`})
}




module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}