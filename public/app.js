var $ = (id) => document.getElementById(id);

$("calculate").addEventListener ("click", () => {
    conversion();
});

var quarters;
var dimes;
var nickels;
var pennies;
var cents;

function conversion() {
    cents = parseInt(document.getElementById("cents").value);
    if (cents >= 0  && cents <= 99) {
        quarters = Math.floor(cents/25);
        cents = cents % 25;
        dimes = Math.floor(cents/10);
        cents = cents % 10;
        nickels = Math.floor(cents/5);
        pennies = cents % 5;
        displayChange();
    } 
    else {
        alert("Please enter a number between 0 and 99")  
    }
}

function displayChange() {
    $("quarters").value = quarters;
    $("dimes").value = dimes;
    $("nickels").value = nickels;
    $("pennies").value = pennies;
    
    
}


