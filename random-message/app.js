const exerciseList = ["deadlift", "squat", "overhead press", "bench press", "incline press", "bent-over row", "pull-up"]
const structures = ["5 sets of 5", "3 sets of 8", "3 sets of 10", "4 sets of 12"]
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

console.log("You need to work out! Here's how to start!")

let exercise1 = `Start with ${exerciseList[Math.floor(Math.random()*7)]} for ${structures[Math.floor(Math.random()*4)]} `
let exercise2 = `Then move to ${exerciseList[Math.floor(Math.random()*7)]} for ${structures[Math.floor(Math.random()*4)]}`
let exercise3 = `Finish up with ${exerciseList[Math.floor(Math.random()*7)]} for ${structures[Math.floor(Math.random()*4)]}`
let program = `Do that on ${daysOfWeek[Math.floor(Math.random()*7)]}, ${daysOfWeek[Math.floor(Math.random()*7)]}, and ${daysOfWeek[Math.floor(Math.random()*7)]}, and you'll see results in no time!`
console.log(exercise1 + exercise2 + exercise3 + program)