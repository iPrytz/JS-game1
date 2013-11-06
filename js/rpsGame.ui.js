/*jslint browser: true, nomen:true */
/*global rpsGame : false, $ : false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

rpsGame.ui = {};

$(function () {
    "use strict";

    $.ionSound({
        sounds: [
            "mk_laugh",
            "mk_cry",
            "mk_fight",
            "yes",
            "no"
        ],
        path: "fx/"
    });

    rpsGame.ui.sound = $.ionSound;

    rpsGame.ui.backgrounds = ["desert.jpg", "ny.jpg", "sthlm.jpg", "underwater.jpg", "cl-room.JPG"];

    rpsGame.ui.setRandomBg = function () {
        $("#game").css({
            "background-image": "url(./img/bg/" + rpsGame.ui.backgrounds[Math.floor(5 * Math.random())] + ")"
        });
    };





    rpsGame.ui.animate = function () {


        $("#playerImg").toggleClass("animateL");
        $("#cpuImg").toggleClass("animateR");

        $('#cpuImg').animate({
            "margin-top": '-=25px',
            "left": '+=30px'
        }, 200);
        $('#playerImg').animate({
            "margin-top": '-=25px',
            "left": '-=30px'
        }, 200);

        $('#cpuImg').animate({
            "margin-top": '+=25px',
            "left": '-=30px'
        }, 200);
        $('#playerImg').animate({
            "margin-top": '+=25px',
            "left": '+=30px'
        }, 200);
        $('#cpuImg').animate({
            "margin-top": '-=25px',
            "left": '+=30px'

        }, 200);
        $('#playerImg').animate({
            "margin-top": '-=25px',
            "left": '-=30px'
        }, 200);

        $('#cpuImg').animate({
            "margin-top": '+=25px',
            "left": '-=30px'
        }, 200);
        $('#playerImg').animate({
            "margin-top": '+=25px',
            "left": '+=30px'
        }, 200);

        $('#cpuImg').animate({
            "margin-top": '-=25px',
            "left": '+=30px'
        }, 200);
        $('#playerImg').animate({
            "margin-top": '-=25px',
            "left": '-=30px'
        }, 200);

        $('#cpuImg').animate({
            "margin-top": '+=25px',
            "left": '-=30px'

        }, 200);
        $('#playerImg').animate({
            "margin-top": '+=25px',
            "left": '+=30px'
        }, 200);

        setTimeout(function () {
            $("#playerImg").toggleClass("animateL");
            $("#cpuImg").toggleClass("animateR");
        }, 1200);



    };

    rpsGame.ui.setDefaultImg = function () {
        $("#playerImg").attr('src', 'img/rock.png');
        $("#cpuImg").attr('src', 'img/rock.png');
    };

    rpsGame.ui.setCpuImg = function (cpu) {

        if (cpu === "rock") {
            $("#cpuImg").attr('src', 'img/rock.png');
        } else if (cpu === "paper") {
            $("#cpuImg").attr('src', 'img/paper.png');
        } else if (cpu === "scissors") {
            $("#cpuImg").attr('src', 'img/scissors.png');
        }

    };

    rpsGame.ui.setPlayerImg = function (player) {
        if (player === "paper") {
            $("#playerImg").attr('src', 'img/paper.png');
        } else if (player === "scissors") {
            $("#playerImg").attr('src', 'img/scissors.png');
        } else if (player === "rock") {
            $("#playerImg").attr('src', 'img/rock.png');
        }
    };

    rpsGame.ui.showResult = function (result) {
        $("#textWL").text(result).fadeIn();

        setTimeout(function () {
            $("#textWL").fadeOut();

        }, 800);

    };

    rpsGame.ui.gameEnd = function (whoWin) {
        if (whoWin === "cpu") {
            $("#game").fadeTo(500, 0.5);

            $("#textWL").text("You lost the game!").fadeIn();
            $("#newGame").fadeIn();
            rpsGame.ui.sound.play("mk_cry");

        } else if (whoWin === "player") {
            $("#game").fadeTo(500, 0.5);
            $("#textWL").text("You won the game!").fadeIn();
            $("#newGame").fadeIn();
            rpsGame.ui.sound.play("mk_laugh");

        }

    };

    rpsGame.ui.playSound = function (result) {
        if (result === "You Win!") {
            rpsGame.ui.sound.play("yes");

        } else if (result === "You Lose!" || result === "Draw!") {
            rpsGame.ui.sound.play("no");

        }

    };

    rpsGame.ui.reloadGame = function (yn) {
        if (yn === "yes") {

            $("#game").fadeTo(1000, 10);
            rpsGame.ui.loadMeter();
            $("#textWL, #newGame").fadeOut();
            rpsGame.ui.setDefaultImg();


        } else if (yn === "no") {
            $("#main").fadeTo(1000, 0);

        }

    };


    rpsGame.ui.loadMeter = function () {

        rpsGame.ui.sound.play("mk_fight");
        $(".meter > span").each(function () {
            $(this)
                .data("origWidth", $(this).width())
                .width(0)
                .animate({
                    width: 98 + '%'
                }, 1200);

        });
    };

    rpsGame.ui.loadMeter();
    rpsGame.ui.setRandomBg();





});