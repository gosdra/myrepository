
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

        console.log(value)
      });
}
