$(document).ready(function () {

  function whiteList() {

    var users = JSON.parse(localStorage.getItem('users'));
   
    for( key in users) {
      $("input[name=" + key + "]").val(users[key]);

    }

  };

  whiteList();
  var user = {};
  
  $('.txt').on('keyup', function(){

      var key = $(this).attr("name")
      var value = $(this).val();

      user[key] = value;

      // user.name = value;

      localStorage.setItem('users', JSON.stringify(user));
     });

  // var user = {

  //     name: $('input[name=userName]').val(),
  //     phone: $('input[name=userPhone]').val(),
  //     mail: $('input[name=userMail]').val()

  // }

  // localStorage.setItem('users', JSON.stringify(user));

});