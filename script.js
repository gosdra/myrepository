
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

        $('button[type="button"]').click(function() {
          if( $(this).text() == correctAnswer ) {
            $(this).removeClass("btn-secondary").addClass("green").stop().delay(2000).queue(function() {
              location.reload();
            });
          } else {
            $(this).removeClass("btn-secondary").addClass("red").stop().delay(2000).queue(function() {
              location.reload();
            });
          }
        });
      });
}
