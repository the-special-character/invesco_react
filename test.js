const data = {
    Students: [
        "rec2bBA5X2PKMcAGN",
        "recoQBxwU83QJq69L",
        "recSePppFodYpFy0l"
    ], 
    "Name-first": "CS 103" // "CS 104"
};


const newData = {...data,Students: [
    ...data.Students.slice(0, 1),
    ...data.Students.slice(2),
]}

// const newData = Object.assign({}, data, { "Name-first": "CS 104" })

console.log(newData);


// change name immutably
