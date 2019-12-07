function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
function play() {
    var bet = document.getElementById("bet").value;
    var money = bet;
    var totalRolls = 0;
    var maxMoney = bet;
    var maxMoneyRoll = 0;
    
    if (bet <= 0){
        alert("Please make a bet larger than $0.00 ");
        return;
    }
    
    while (money > 0) {
        var roll1 = rollDice();
        var roll2 = rollDice();
        var diceTotal = roll1+roll2;
        totalRolls++
        if (diceTotal != 7) {
            money--;
        } else {
            money += 4
        }
        if (money > maxMoney) {
            maxMoney = money;
            maxMoneyRoll = totalRolls;
        }
    }
    
    document.getElementById("resultsTable").style.display = "inline";
    document.getElementById("playButton").value = "Play Again";
    document.getElementById("resultBet").innerHTML = "$" + bet + ".00";
    document.getElementById("resultRollCounter").innerHTML = totalRolls;
    document.getElementById("resultMaxMoney").innerHTML = "$" + maxMoney + ".00";
    document.getElementById("resultMaxMoneyRoll").innerHTML = maxMoneyRoll;
}
