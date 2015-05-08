// your code here


    var templatingFunction = Handlebars.compile($('#boxy-index').html());
    var result = templatingFunction({boxy: boxy});

    $('#content').html(result);
$(document).ready(function(){
  $('.boxy').click(function(){
    $(this).remove();
  });
});
// your code here
