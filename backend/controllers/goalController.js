const asyncHandler = require("express-async-handler")
const Goal = require("../models/goalModel")
//@desc Get Goals
//@route Get /api/goals
const { setgid } = require("process")

//@access Private
const getGoals = asyncHandler(async(req,res)=>{
    const goals = await Goal.find()
    res.status(200).json(goals)
})

//@desc Set Goals
//@route POST /api/goals
//@access Private
const setGoal = asyncHandler(async(req,res)=>{
    console.log(req.body)
    if (!req.body.text){
        res.status(400)
        throw new Error("please add a text field")
    }

    const goal = await  Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

//@desc Update Goals
//@route PUT /api/goals/:id
//@access private
const updateGoal = asyncHandler(async(req,res)=>{
const goal = await Goal.findById(req.params.id)
    if(!goal){
        throw new Error ("Goal Not Found")
    }

    const updateGoal = await  Goal.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    }) //return the updated document instead

    res.status(200).json(updateGoal)
})
//@desc Delete Goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async(req,res)=>{
    
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error ("Goal Not Found")
    }

    await goal.deleteOne()
    res.status(200).json({id: req.params.id})
})




module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}