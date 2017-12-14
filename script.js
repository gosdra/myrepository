
$.ajax({
  url: 'https://opentdb.com/api.php?amount=1&type=boolean',
  method: 'GET',
  contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  data: {
    amount: 1,
    type: 'boolean'
  },
  success: handleResults
});

function handleResults(response_code) {
  var question = $(document.createElement('p'));
  question.appendTo('#one')
}
