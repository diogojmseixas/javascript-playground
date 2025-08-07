//Template strings

const title = "Best reads of 1989";
const author = "John";
const likes = 30;

//Concatenation way

//let result = "The blog called " + title + " by " + author + " has " + likes + " likes.";

//console.log(result);

//Template string way

let result = `The blog called ${title} by ${author} has ${likes} likes.`;

//console.log(result);

//Creating html templates

let html = `
    <h1>${title}</h1>
    <p>${author}</p>
    <span>${likes}</span>
`;

console.log(html);
