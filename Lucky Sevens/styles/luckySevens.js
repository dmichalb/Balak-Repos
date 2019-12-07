function rollDice() {
    return Math.floor(Math.random()*6) +1;
    for(var i = 0; i < 100; i++) {
        console.log(rollDice());
    }

    function playLuckySevens() {
    var bet = Number(document.getElementById("bet").value);
    var roll1 = rollDice();
    var roll2 = rollDice();
    var money = bet;
    var totalRolls =  0;
    var maxMoneyHeld = 0;
    var maxMoneyRolls = 0;
    var diceTotal;
    
    if (money <= 0) {
        alert("You did not make a large enough bet to play. Make another bet.")
    } else {
        while (money > 0) {
            roll1 = rollDice();
            roll2 = rollDice();
            diceTotal = roll1 + roll2;
            totalRolls++;
            if (diceTotal != 7){
                money--;
                console.log("You Lost");
            }
            else {
                money += 4;
                if (money > maxMoneyHeld) {
                    maxMoneyHeld += (money-maxMoneyHeld);
                }
                console.log("You Win");
            }
        }
    }
    }
    document.getElementById("reultsTable").style.display= "block";
    document.getElementById("submitButton").innerHTML = "Play Again";
    document.getElementById("bet").innerHTML = "bet";
    document.getElementById("totalRolls").innerHTML = "totalRolls";
    document.getElementById("maxMoneyHeld").innerHTML = "maxMoneyHeld";
    docuemnt.getElementById("maxMoneyRolls").innerHTML = "maxMoneyRolls";
}