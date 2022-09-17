form = document.getElementById("lift-simulation-form");

let numOfLifts = 1;
let numOfFloors = 2;

form.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(event){
    event.preventDefault();
    const form_data = new FormData(event.target);
    for (const [key, value] of form_data.entries()){
        if (key==="no-of-floors"){
            numOfFloors = parseInt(value, 10)
        }
        if (key==="no-of-lifts"){
            numOfFloors = parseInt(value, 10)
        }
    }

    // console.log(`Floors: ${numOfFloors}`)
    // console.log(`Lifts: ${numOfLifts}`)
}
