const store = require('./store.js')


const onLoginSuccess = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  const scoreHTML = (`
      <h4>User Logged In</h4>
      <p>Click 'Create Saved Game' If You Want To Save Your Moves</p>
      <br>
    `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
  $("#log-in-form").css("display", "none")
  $("#register-form").css("display", "none")
  $("#logout-form").css("display", "block")
  $("#change-pw-form").css("display", "block")
  $(".pets-class").css("display", "block")
  store.user = data.user
  }

const loginError = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('ERROR')
  const scoreHTML = (`
        <h4>Oh Oh! Something Went Wrong!</h4>
        <p>Try Logging In Again</p>
        <br>
      `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const onRegisterSuccess = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  const scoreHTML = (`
      <h4>User Registered!</h4>
      <br>
    `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
  $("#register-form").css("display", "none")
}

const registerError = function(error) {
  if (error) {
    $('.modal-body').html('')
    $("#myModalLabel").html('ERROR')
    const scoreHTML = (`
        <h4>Oh Oh! Something Went Wrong!</h4>
        <p>Try Registering Again</p>
        <br>
      `)
    $(".modal-body").html(scoreHTML)
    $("#myModal").modal('show')
  }
}

const onPwSuccess = function() {
  $('.modal-body').html('')
  $("#myModalLabel").html('Success!')
  const scoreHTML = (`
      <h4>User Changed Password</h4>
      <br>
    `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const pwError = function(error) {
  if (error) {
    $('.modal-body').html('')
    $("#myModalLabel").html('ERROR')
    const scoreHTML = (`
        <h4>Oh Oh! Something Went Wrong!</h4>
        <p>Try Entering Passwords Again</p>
        <br>
      `)
    $(".modal-body").html(scoreHTML)
    $("#myModal").modal('show')
  }
}

const onLogoutSuccess = function() {
  $(".scoreboard").css("display", "none")
  $(".main-game").css("display", "none")
  $(".login").css("display", "block")
  $("#registerForm").css("display", "block")

  $('.modal-body').html('')
  $("#myModalLabel").html('User Logged out')
  const message = (`
  <h4>User Logged out</h4>
  <h3>Thanks For Playing TicTacToe!</h3>
  `)
  $(".modal-body").html(message)
  $("#myModal").modal('show')
  $("#log-in-form").css("display", "block")
  $("#register-form").css("display", "block")
  $("#logout-form").css("display", "none")
  $("#change-pw-form").css("display", "none")
  $(".pets-class").css("display", "none")
}

const logoutError = function(error) {
  if (error) {
    $('.modal-body').html('')
    $("#myModalLabel").html('ERROR')
    const scoreHTML = (`
        <h4>Oh Oh! Something Went Wrong!</h4>
        <p>Try Logging Out Again</p>
        <br>
      `)
    $(".modal-body").html(scoreHTML)
    $("#myModal").modal('show')
  }
}

const onCreatePetSuccess = function(data) {
  store.pet = data.pet
  console.log(data.pet)
  $('.modal-body').html('')
  $("#myModalLabel").html('Pet Created')
  const scoreHTML = (`
        <h4>Meow! You Have A New Friend!</h4>
        <p>Pet ID: ${data.pet.id}</p>
        <p>Pet Name: ${data.pet.name}</p>
        <p>Pet Age: ${data.pet.age}</p>
        <br>
      `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const onCreatePetError = function(error) {
  if (error) {
    $('.modal-body').html('')
    $("#myModalLabel").html('ERROR')
    const scoreHTML = (`
        <h4>Oh Oh! Something Went Wrong!</h4>
        <p>Check Your Internet Connection</p>
        <br>
      `)
    $(".modal-body").html(scoreHTML)
    $("#myModal").modal('show')
  }
}


module.exports = {
  onRegisterSuccess,
  onLoginSuccess,
  onPwSuccess,
  pwError,
  onLogoutSuccess,
  logoutError,
  loginError,
  registerError,
  onCreatePetSuccess
}
