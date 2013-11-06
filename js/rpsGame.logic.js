/*jslint browser: true, nomen:true */
/*global rpsGame : false, $ : false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

rpsGame.logic = {};

var choices = ["rock", "paper", "scissors"],
    cpu,
    player;

$(function () {
    "use strict";




    rpsGame.logic.result = function (playerChoice, cpuChoice) {
        var result;

        if (cpuChoice === playerChoice) {
            result = "Draw!";
        } else if ((playerChoice === "rock" && cpuChoice === "scissors") || (playerChoice === "scissors" && cpuChoice === "paper") || (playerChoice === "paper" && cpuChoice === "rock")) {
            result = "You Win!";

        } else if ((playerChoice === "rock" && cpuChoice === "paper") || (playerChoice === "scissors" && cpuChoice === "rock") || (playerChoice === "paper" && cpuChoice === "scissors")) {
            result = "You Lose!";
        }
        return result;
    };

    rpsGame.logic.setCpuChoice = function () {
        var cpuChoice;
        cpuChoice = choices[Math.floor(3 * Math.random())];
        return cpuChoice;

    };


    rpsGame.logic.kills = function (result) {

        if (result === "You Win!") {
            $("#cpuMeter").animate({
                "width": "-=45%"
            }, "slow");

        } else if (result === "You Lose!") {
            $("#playerMeter").animate({
                "width": "-=45%"
            }, "slow");

        }

        setTimeout(function () {
            if ($("#cpuMeter").width() <= 1 || $("#playerMeter").width() <= 1) {
                rpsGame.logic.gameOver();
            }
        }, 1300);


    };

    rpsGame.logic.gameOver = function () {
        rpsGame.ui.showResult("Game Over!");

        setTimeout(function () {
            if ($("#cpuMeter").width() <= 1) {
                rpsGame.ui.gameEnd("player");
            } else if ($("#playerMeter").width() <= 1) {
                rpsGame.ui.gameEnd("cpu");
            }
        }, 1500);





    };




});