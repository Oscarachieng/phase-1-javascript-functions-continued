// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
 console.log(saturdayFun("worship"))

 function mondayWork(activity= "go to the office") {
     return `This Monday, I will ${activity}.`
 }

 console.log(mondayWork());

function wrapAdjective(visualFlair="*") {
    return function(adjective= "special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
}
console.log(wrapAdjective("!!")("humerous"))