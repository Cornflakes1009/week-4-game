$(document).ready(function () {
    // sets random value for crystals 1-10
    var crystalValueSelector;
    var randomNumber = function(){
        crystalValueSelector = Math.floor(Math.random() * 10);
        return crystalValueSelector;
    }
    
    // sets random value for number to guess 25-50
    var numberToAchieve = Math.floor(Math.random() * (50 - 25) + 25);
    // setting each crystal to have a random number value when the game loads
    var gem1 = randomNumber();
    var gem2 = randomNumber();
    var gem3 = randomNumber();
    var gem4 = randomNumber();
    console.log(gem1, gem2, gem3, gem4);
    // updates the number to mach field with the random number
    $('.numberToMatch').html(numberToAchieve);

    $('.gemButton1').on('click', function () {
        console.log("gem1 was clicked");
    })



});












