$(document).ready(function () {

    function reset() {
        
       
        totalScore = 0;
        numberToAchieve = Math.floor(Math.random() * (50 - 25) + 25);
        $('.numberToMatch').html(numberToAchieve);
        randomNumber();
        gem1Value = randomNumber();
        gem2Value = randomNumber();
        gem3Value = randomNumber();
        gem4Value = randomNumber();
        $('.score').html(totalScore);
    }
    
    // function to set random numbers between 1-9 to assign to each gem
    var crystalValueSelector;
    var randomNumber = function () {
        crystalValueSelector = Math.floor((Math.random() * 10) + 1);
        return crystalValueSelector;
    }
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    // sets random value for number to guess 25-50
    var numberToAchieve = Math.floor(Math.random() * (50 - 25) + 25);

    // setting each crystal to have a random number value when the game loads
    var gem1Value = randomNumber();
    var gem2Value = randomNumber();
    var gem3Value = randomNumber();
    var gem4Value = randomNumber();

    // updates the number to mach field with the random number
    $('.numberToMatch').html(numberToAchieve);

    function checkScore() {
        if (totalScore === numberToAchieve) {
            wins++;
            $('#win-or-lose').html("You Win!!");
            $('#wins').html('Wins: ' + wins);
            //alert("You Win!");
            setTimeout(reset(), 10000);
        } else if (totalScore > numberToAchieve) {
            losses++;
            $('#win-or-lose').html("LOSER!!");
            $('#losses').html('Losses: ' + losses);
            //alert("You Went Over!"); 
            setTimeout(reset(), 10000);
        } else {
            console.log('keep going!');
        }
    }
    $('.gemButton1').on('click', function () {
        totalScore += gem1Value;
        $('.score').html(totalScore);
        console.log("gem1 was clicked");
        checkScore();
    })
    $('.gemButton2').on('click', function () {
        console.log("gem2 was clicked");
        totalScore += gem2Value;
        $('.score').html(totalScore);
        checkScore();
    })
    $('.gemButton3').on('click', function () {
        console.log("gem3 was clicked");
        totalScore += gem3Value;
        $('.score').html(totalScore);
        checkScore();
    })
    $('.gemButton4').on('click', function () {
        console.log("gem4 was clicked");
        totalScore += gem4Value;
        $('.score').html(totalScore);
        checkScore();
    })



});












