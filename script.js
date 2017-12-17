
$.ajax({
  url: 'https://opentdb.com/api.php?amount=1&type=boolean',
  method: 'GET',
  dataType: 'JSON',
  contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  data: {
    amount: 1,
    type: 'boolean'
  },
  success: results
});

function results(data) {
    var ul = $('<ul>').appendTo('#one');
      $(data.results).each(function(index, value){
        ul.append(
       $(document.createElement('li')).text(value.question)
        );
        var correctAnswer = value.correct_answer;
        console.log(value.correct_answer);

        $('button[type="button"]').click(function(correct, incorrect) {
          if( $(this).text() == correctAnswer ) {
<<<<<<< HEAD
            correct++
            $(this).removeClass("btn-secondary").addClass("green").stop().delay(2000).queue(function() {
              location.reload();
            });
          } else {
            incorrect++
            $(this).removeClass("btn-secondary").addClass("red").stop().delay(2000).queue(function() {
              location.reload();
            });
=======
             $(this).removeClass("btn-secondary").addClass("green");
          } else {
            $(this).removeClass("btn-secondary").addClass("red");
>>>>>>> 918aad43220e5d0d499b9f83e83c27aa6ecad023
          }
        });
      });
}
