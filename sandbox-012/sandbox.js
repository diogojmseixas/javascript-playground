//For loops

/* for (let i = 0; i < 5; i++) {
    console.log("In loop: ", i);
}

console.log("Loop finished"); */

const names = ["John", "Edward", "Jackson"];

for (let i = 0; i < names.length; i++) {
    //console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
