// New Game 
$(document).ready(function () {
    $(".new-game").click(function () {
        $(".game-info").slideDown();
    });
});

// Start The New Game 
$(document).ready(function () {
    $(".start").click(function () {
        var playerName = $(".name").val();
        if (playerName != "") {
            $(".one").css("display", "none");
            $(".you").text(playerName);
            $(".two").css("display", "block");
        }
    });
});


// Game Function
$(document).ready(function () {
    $(".hand").click(function () {
        var image_1 = $(this).attr("src"),
            num = Math.floor((Math.random() * 3) + 1),
            image_2 = $(".hand-2");
        if (num == 1) {
            $(image_2).attr("src", "https://image.ibb.co/m07DUp/rock.png");
        } else if (num == 2) {
            $(image_2).attr("src", "https://image.ibb.co/iB8L9p/paper.png");
        } else if (num == 3) {
            $(image_2).attr("src", "https://image.ibb.co/i53bh9/scissors.png");
        }
        $(".hand-1").attr("src", image_1);

        // Who won?
        $(document).ready(function () {
            var image_1_attr = $(".hand-1").attr("src"),
                image_2_attr = $(image_2).attr("src"),
                p = $(".player-score").html(),
                c = $(".computer-score").html(),
                rock = "https://image.ibb.co/m07DUp/rock.png",
                paper = "https://image.ibb.co/iB8L9p/paper.png",
                scissors = "https://image.ibb.co/i53bh9/scissors.png";

            if (image_1_attr == rock) {
                if (image_2_attr == paper) {
                    $(".result").text("You Lose!");
                    $(".result").addClass("lose");
                    $(".result").removeClass("win");
                    $(".result").removeClass("draw");
                    $(".hand-2").addClass("winner");
                    $(".hand-1").removeClass("winner");
                    $(".computer-score").html(++c);
                } else if (image_2_attr == scissors) {
                    $(".result").text("You Win!");
                    $(".result").addClass("win");
                    $(".result").removeClass("lose");
                    $(".result").removeClass("draw");
                    $(".hand-1").addClass("winner");
                    $(".hand-2").removeClass("winner");
                    $(".player-score").html(++p);
                } else {
                    $(".result").text("Draw");
                    $(".result").addClass("draw");
                    $(".result").removeClass("win");
                    $(".result").removeClass("lose");
                    $(".hand-1").removeClass("winner");
                    $(".hand-2").removeClass("winner");
                }
            } else if (image_1_attr == paper) {
                if (image_2_attr == rock) {
                    $(".result").text("You Win!");
                    $(".result").addClass("win");
                    $(".result").removeClass("lose");
                    $(".result").removeClass("draw");
                    $(".hand-1").addClass("winner");
                    $(".hand-2").removeClass("winner");
                    $(".player-score").html(++p);
                } else if (image_2_attr == scissors) {
                    $(".result").text("You Lose!");
                    $(".result").addClass("lose");
                    $(".result").removeClass("win");
                    $(".result").removeClass("draw");
                    $(".hand-2").addClass("winner");
                    $(".hand-1").removeClass("winner");
                    $(".computer-score").html(++c);
                } else {
                    $(".result").text("Draw");
                    $(".result").addClass("draw");
                    $(".result").removeClass("win");
                    $(".result").removeClass("lose");
                    $(".hand-1").removeClass("winner");
                    $(".hand-2").removeClass("winner");
                }
            } else {
                if (image_2_attr == rock) {
                    $(".result").text("You Lose!");
                    $(".result").addClass("lose");
                    $(".result").removeClass("win");
                    $(".result").removeClass("draw");
                    $(".hand-2").addClass("winner");
                    $(".hand-1").removeClass("winner");
                    $(".computer-score").html(++c);
                } else if (image_2_attr == paper) {
                    $(".result").text("You Win!");
                    $(".result").addClass("win");
                    $(".result").removeClass("lose");
                    $(".result").removeClass("draw");
                    $(".hand-1").addClass("winner");
                    $(".hand-2").removeClass("winner");
                    $(".player-score").html(++p);
                } else {
                    $(".result").text("Draw");
                    $(".result").addClass("draw");
                    $(".result").removeClass("win");
                    $(".result").removeClass("lose");
                    $(".hand-1").removeClass("winner");
                    $(".hand-2").removeClass("winner");
                }
            }
        });

        $(".hand-1").fadeIn();
        $(".hand-2").fadeIn();
        $(".result").fadeIn(1200);
        $(".reset").fadeIn(1200);

        // Reset
        $(document).ready(function () {
            $(".reset").click(function () {
                $(".hand-1").css("display", "none");
                $(".hand-2").css("display", "none");
                $(".result").css("display", "none");
                $(".reset").css("display", "none");
                $(".computer-score").html("0");
                $(".player-score").html("0");
            });
        });
    });
});