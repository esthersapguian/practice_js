const array = [];

function programMenu(){
    console.log("[1]Add a number [2] Remove a number [3] Display content of array");
    let number = prompt("enter the number of your choice");

    number = number.toLowerCase().trim();

    switch(number){
        case '1':
            addNumber();
            break;
        case '2':
            removeNumber();
            break;
        case '3':
            displayNumber();
        default:
        alert("Invalid number.");
          
    }
}

function addNumber(){
    console.log("Add Number");
    let add = prompt("enter a number: ");
    array.push(add);
    
    console.log("You added: ", add);
    console.log("Your stack is: " , array);
    askAgainFunction();
} 

function removeNumber(){
    console.log("Remove Number");
    let remove = prompt("Your remove ");
    array.pop(remove);
    
    console.log("Your stack is: " , array);

    askAgainFunction();
}

function displayNumber(){
    console.log("Display number");
    
    
    console.log("Your stack is: " , array);

    askAgainFunction();
}

function askAgainFunction(){
    let more = prompt("You wanna go back to menu?");
    more = more.trim().toLowerCase();

    switch(more){
        case "yes":
            programMenu();
            break;
        case "no":
            alert("thank you for participating in this program");
            break;
        default:
            alert("unavailable");
    }
}

programMenu();