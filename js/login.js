

$("#register_button").click(function(){
  $("#register_div").animate({
    marginLeft: '34%',
    opacity: '1',
  });
  $("#login_div").animate({
    marginRight: '-30%',
    opacity: '0'
  });
});
$("#login_button").click(function(){
  console.log('here');
  $("#login_div").animate({
    marginRight: '34%',
    opacity: '1'
  });
  $("#register_div").animate({
    marginLeft: '-30%',
    opacity: '0'
  });
});