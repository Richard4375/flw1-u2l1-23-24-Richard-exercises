// CODE ALONG
// We want to write a function that:
//   - Takes any two numbers as arguments
//   - Multiplies them together, and 
//   - Logs them to the console.


// 1. DECLARE & NAME THE FUNCTION
//   - What should I name this function?

// 2. PARAMETERS
//   - How many parameters will I need?
//   - How do I know this?
//   - What should I call them?

// 3. BODY
//   - What needs to happen to my parameters to give me the result I want?
//   - Where do I want the result to show up?

// 4. FUNCTION CALL
//   - Call the function and pass through arguments to see if the function works.

function multiply(num1, num2) {
  console.log(num1 * num2);
}

multiply(4, 5)

// CODE SOLO
// 5. Write a function that will do the following:
//   - If the correct password “October” is entered, print the message “Success!” to the console
//   - Else, print “Try again!” if any other password is entered.
function password(password) {
  if(password === "October"){
    console.log("Success!")
  }
  else {
    console.log("Try again!")
  }
}

password('October')