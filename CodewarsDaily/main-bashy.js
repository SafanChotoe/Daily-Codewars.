// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
// FUNDAMENTALS
function remove(s,n) {
    for(let i = 0; i <= n; i++) {
        s = s.replace('!', '')
    }
    return s
}
//takes in the string and number of exclamations that need to be erased from left to right.
//the for loop makes sure that the removal of exclamation is repeated as much times as n. This is done with the replace method
//during this for loop, the string s is being changed to the new string: new string is less the exclamations.
//at the end of the loop, the string s is returned.