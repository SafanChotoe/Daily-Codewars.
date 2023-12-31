// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"
// FUNDAMENTALS
function remove(s) {
    for(let i = 0; s.endsWith("!"); i++) {
        s = s.slice(0, -1)
    }
    return s
}
//creates a loop that keeps on running if the end of s is equal to "!"
//if the loop keeps running, then the last element, which should be equal to "!" then the slice method runs.
//the slice method take the elements from start to end excluding end.
//In this case from the zero index to the 1 before last index.
//-1 index is equal to the last index.
//since the loop runs only if the last element is equal to "!" the slice method will exclude this last method.


