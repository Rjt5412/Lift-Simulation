const form = document.getElementById("lift-simulation-form");
const liftsSpace = document.querySelector(".lifts-space")


let numOfLifts = 1
let numOfFloors = 2

form.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(event){
    event.preventDefault();
    const form_data = new FormData(event.target);
    for (const [key, value] of form_data.entries()){
        if (key==="no-of-floors"){
            numOfFloors = parseInt(value, 10);
        }
        if (key==="no-of-lifts"){
            numOfLifts = parseInt(value, 10);
        }
    }

    // console.log(`Floors: ${numOfFloors}`);
    // console.log(`Lifts: ${numOfLifts}`);

    initializeApp();

}

function initializeApp(){

    createFloors();
    createLifts();
}

function createFloors(){
    if (numOfFloors && numOfFloors>=0){
        for (let i=0; i<numOfFloors; i++){
            // Create new floor
            const newFloor = document.createElement("div");
            newFloor.className = "floor";
    
            // Add this floor to the lift-space
            liftsSpace.prepend(newFloor);
    
            // Add the up and down buttons
            const buttons = document.createElement("div");
            buttons.className = "buttons";
    
            const buttonUp = document.createElement("button");
            buttonUp.className = "button-up";
            buttonUp.innerText = "UP";
    
            const buttonDown = document.createElement("button");
            buttonDown.className = "button-down";
            buttonDown.innerText = "DOWN";
    
            buttons.append(buttonUp, buttonDown);
    
            // Add the floor number
            const floorNum = document.createElement("div");
            floorNum.className = "floor-num-text";
            floorNum.innerText = `Floor${i}`;
            
            newFloor.append(buttons, floorNum);
        }
    }
    
}

function createLifts() {
    if (numOfLifts && numOfLifts >=0){
        liftsArea = document.createElement("div");
        liftsArea.className = "lifts-area";
        for(let i=0; i<numOfLifts; i++){
            lift = document.createElement("div");
            lift.className = "lift";

            // create left and right doors
            left_door = document.createElement("div");
            left_door.className = "left-door";
            right_door = document.createElement("div");
            right_door.className = "right-door";
            lift.append(left_door, right_door);

            liftsArea.append(lift);

            // Place all the lifts starting from the bottom floor
            liftsSpace.childNodes[numOfFloors-1].append(liftsArea)
        }
    }
}