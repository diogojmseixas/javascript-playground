//Else if statements

const password = "password123456";

if (password.length >= 12) {
    console.log("That password is mighty strong!");
} else if (password.length >= 8) {
    console.log("That password is long enough!");
} else {
    console.log("Password is not long enough!");
}
