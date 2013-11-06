/*jslint browser: true, nomen:true */
/*global rpsGame : false, $ : false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

rpsGame.play = {};

$(function () {
    "use strict";
    var cpu,
        result;

    $("#rockButton").click(function () {
        //sets both hands to default rock
        rpsGame.ui.setDefaultImg();

        //sets cpu choice
        cpu = rpsGame.logic.setCpuChoice();

        //animates both hands
        rpsGame.ui.animate();

        //time out set to run after animation is finished (1250 ms)
        setTimeout(function () {

            //set cpu image hand according to the random choice we got before
            rpsGame.ui.setCpuImg(cpu);

            //set player image according to the button pressed
            rpsGame.ui.setPlayerImg("rock");

            //get and store the result in the result variable
            result = rpsGame.logic.result("rock", cpu);

            //run function to show the result text on screen
            rpsGame.ui.showResult(result);

            //remove some life from energy bar
            rpsGame.logic.kills(result);

            //play a sound depending on if you win or lose
            rpsGame.ui.playSound(result);





        }, 1250);
    });

    $("#paperButton").click(function () {

        rpsGame.ui.setDefaultImg();
        cpu = rpsGame.logic.setCpuChoice();
        rpsGame.ui.animate();

        setTimeout(function () {
            rpsGame.ui.setCpuImg(cpu);
            rpsGame.ui.setPlayerImg("paper");
            result = rpsGame.logic.result("paper", cpu);
            rpsGame.ui.showResult(result);
            rpsGame.logic.kills(result);
            rpsGame.ui.playSound(result);




        }, 1250);

    });

    $("#scissorsButton").click(function () {

        rpsGame.ui.setDefaultImg();
        cpu = rpsGame.logic.setCpuChoice();
        rpsGame.ui.animate();


        setTimeout(function () {
            rpsGame.ui.setCpuImg(cpu);
            rpsGame.ui.setPlayerImg("scissors");

            result = rpsGame.logic.result("scissors", cpu);


            rpsGame.ui.showResult(result);
            rpsGame.logic.kills(result);
            rpsGame.ui.playSound(result);



        }, 1250);

    });

    $("#newBg").click(function () {
        rpsGame.ui.setRandomBg();

    });


    $("#newGame span:first").click(function () {
        rpsGame.ui.reloadGame("yes");
    });

    $("#newGame span:last").click(function () {
        rpsGame.ui.reloadGame("no");
    });
});