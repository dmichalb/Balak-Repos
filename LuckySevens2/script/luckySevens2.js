function validateForm (){
    var bet = document.forms["luckySevens"]["bet"].value;
    if (bet <= 0){
    document.getElementById("error-bet").innerHTML = "please make a bet larger than $0.00 *"
    }
}
function rollDice() {
    return Math.floor(math.random() * 6) + 1;
}
function play() {
    var bet = document.forms["luckySevens"]["bet"].value;
    var money = bet;
    var roll1 = rollDice;
    var roll2 = rollDice
    var diceTotal = roll1+roll2;
    var moneyArray = [];
    
    while (money > 0) {
        roll1;
        roll2;
        diceTotal;
        if (diceTotal != 7) {
            money --;
        } else {
            money += 4
        }
        moneyArray.push(money)
    }
    var rollCounter = moneyArray.length;
    var maxMoney = Math.max.apply(Math, moneyArray);
    var highestPosition = moneyArray.indexOf(maxMoney);
    var maxMoneyRoll = rollCounter - highestPosition;
    
    function showResults() {
        document.getElementById("resultsTable").style.display = "inline";
        document.getElementById("playButton").innerHTML = "Play Again";
        document.getElementById("resultBet").innerHTML = "$" + bet + ".00";
        document.getElementById("resultRollCounter").innerHTML = rollCounter;
        document.getElementById("resultMaxMoney").innerHTML = "$" + maxMoney + ".00";
        document.getElementById("resultMaxMoneyRoll").innerHTML = maxMoneyRoll;
    };
    showResults();
    }
function unhide(resultsTable) {
    var item = document.getElementById("resultsTable");
    if (item) {
        item.className=(item.className=="hidden")?"unhidden":"hidden";
    }
}