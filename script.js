
$( "input" ).on( "click", function() {
$.ajax({
  url: 'https://opentdb.com/api.php?amount=1&type=boolean',
  method: 'GET',
  content-type: 'application/json; charset=UTF-8',
  data: {
    amount: 1,
    type: 'boolean'
  },
  success: handleResults;
});
}
function handleResults (response_code){
  response_code.data.forEach(function(results)  {
    var url = item.results.url
        question.attr('question', url )
        question.appendTo ('.card-header')
      })
};
