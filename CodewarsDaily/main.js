// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

const hello = s => `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`

//magic!
//s is parameter
//if statement in arrow function.
//if s is not empty, then make first letter of s uppercase.
//then take s and erase the first letter.
//Make this result all lowercase.
//than return uppercase first letter and lowercase rest of letters together.
//else: s is empty and just return Hello World.