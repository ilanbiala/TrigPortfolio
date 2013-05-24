$(document).ready(function() {
  x = 2;
  $('#quizImg').click(changeQuizImage());
  $('#crossword').mouseenter(showSolution());
  $('#crossword').mouseleave(hideSolution());
});

function changeQuizImage() {
  if (x % 2 == 0) {
    $('#quizImg').attr("src", "img/quiz-back.png");
  }
  else {
    $('#quizImg').attr("src", "img/quiz-front.png");
  }
  x++;
}

function showSolution() {
  $('#quizImg').attr("src", "img/solution.png").fadeIn(200);
}

function hideSolution() {
  $('#quizImg').attr("src", "img/crossword.png").fadeIn(200);
}