$("input").on("click", function() {
$.ajax({
  url: 'https://opentdb.com/api.php?amount=1&type=boolean',
  method: 'GET',
  contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  data: {
    amount: 1,
    type: 'boolean'
  },
  success: results
});

function results(response_code) {
  var question = $(document.createElement('h1'));
  question.appendTo('#one')
  console.log(question)
}
});
