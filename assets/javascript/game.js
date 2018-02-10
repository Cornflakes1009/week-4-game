$(document).ready(function () {
    
    
    // function to set random numbers between 1-9 to assign to each gem
    var crystalValueSelector;
    var randomNumber = function(){
        crystalValueSelector = Math.floor(Math.random() * 10);
        return crystalValueSelector;
    }
    var totalScore = 0;
    
    // sets random value for number to guess 25-50
    var numberToAchieve = Math.floor(Math.random() * (50 - 25) + 25);

    // setting each crystal to have a random number value when the game loads
    var gem1Value = 1;
    var gem2Value = randomNumber();
    var gem3Value = randomNumber();
    var gem4Value = randomNumber();
    
    // updates the number to mach field with the random number
    $('.numberToMatch').html(numberToAchieve);

    if(totalScore === numberToAchieve) {
        alert("winner");
    }


    $('.gemButton1').on('click', function () {
        console.log("gem1 was clicked");
        totalScore += gem1Value;
        $('.score').html(totalScore);

    })
    $('.gemButton2').on('click', function () {
        console.log("gem2 was clicked");
        totalScore += gem2Value;
        $('.score').html(totalScore);

    })
    $('.gemButton3').on('click', function () {
        console.log("gem3 was clicked");
        totalScore += gem3Value;
        $('.score').html(totalScore);

    })
    $('.gemButton4').on('click', function () {
        console.log("gem4 was clicked");
        totalScore += gem4Value;
        $('.score').html(totalScore);

    })



});












