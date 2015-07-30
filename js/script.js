$(document).ready(function () {

  function whiteList() {

    var users = JSON.parse(localStorage.getItem('users'));
   
    for( key in users) {
      $("input[name=" + key + "]").val(users[key]);

    }

  };

  whiteList();

  $('.medical-btn').on('click', function(){
    $('ul li input').removeAttr("disabled")
  });
  var user = {};
  $('.txt').on('keyup', function(){

      var key = $(this).attr("name")
      var value = $(this).val();

      user[key] = value;
      
      // user.name = value;

      localStorage.setItem('users', JSON.stringify(user));
     });


  console.log(user[key]);
});