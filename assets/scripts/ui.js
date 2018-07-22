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
  // $(".dashboard").css("display", "flex")
  // $("#change-pw-form").css("display", "block")
  // $("#logout-form").css("display", "block")
  $(".user-dash").css("display", "flex")
  $(".pets-class").css("display", "flex")
  $(".foods-class").css("display", "flex")
  $("#image").css("display", "none")
  // $(".pets-foods-container").css("display", "flex")
  store.user = data.user
  }

const loginError = function(error) {
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
  // $("#logout-form").css("display", "none")
  // $("#change-pw-form").css("display", "none")
  $(".user-dash").css("display", "none")
  $(".pets-class").css("display", "none")
  $(".foods-class").css("display", "none")
  $("#image").css("display", "block")
  // $(".pets-foods-container").css("display", "none")
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
        <p>Pet ID: ${store.pet.id}</p>
        <p>Name: ${store.pet.name}</p>
        <p>Age: ${store.pet.age}</p>
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

const onGetPetSuccess = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('My Pets')
  data.pets.forEach(function(pet) {
    const petHTML = (`
        <p>Name: ${pet.name}</p>
        <p>Pet ID: ${pet.id}</p>
        <p>Age: ${pet.age}</p>
        <br>
      `)
    $(".modal-body").append(petHTML)
  })
  $("#myModal").modal('show')
}

const getPetError = function(error) {
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

const onGetOnePetSuccess = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('My Pets')
    const petHTML = (`
        <p>Name: ${data.pet.name}</p>
        <p>Pet ID: ${data.pet.id}</p>
        <p>Age: ${data.pet.age}</p>
        <br>
      `)
    $(".modal-body").html(petHTML)
  $("#myModal").modal('show')
}

const getOnePetError = function(error) {
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

const onDeletePetSuccess = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('Pet Removed')
    const petHTML = (`
        <p>Pet removed from your list!</p>
        <br>
      `)
    $(".modal-body").html(petHTML)
  $("#myModal").modal('show')
}

const deletePetError = function(error) {
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

const onUpdateSuccess = function(data) {
  store.pet = data.pet
  console.log(data.pet)
  $('.modal-body').html('')
  $("#myModalLabel").html('Pet Updated')
  const scoreHTML = (`
        <h4>Meow! Your pets details have been updated!</h4>
        <p>Pet ID: ${store.pet.id}</p>
        <p>Name: ${store.pet.name}</p>
        <p>Age: ${store.pet.age}</p>
        <br>
      `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const updateError = function(error) {
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

const onCreateFoodSuccess = function(data) {
  store.food = data.food
  console.log(data.food)
  $('.modal-body').html('')
  $("#myModalLabel").html('Pet Created')
  const scoreHTML = (`
        <h4>Yum! Your Pet has logged a new food!</h4>
        <p>Food for: ${store.food.pet.name}</p>
        <p>Brand: ${store.food.brand_name}</p>
        <p>Main Ingredient: ${store.food.main_ingredient}</p>
        <p>also contains ${store.food.secondary_ingredient}<p>
        <p>Pet's score for food: ${store.food.score}/10</p>
        <br>
      `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const createFoodError = function(error) {
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

const onGetFoodsSuccess = function(data) {
  console.log(data)
  $('.modal-body').html('')
  $("#myModalLabel").html('My Pets Foods')
  data.foods.forEach(function(food) {
    const petHTML = (`
        <p>ID: ${food.id}</p>
        <p>Brand: ${food.brand_name}</p>
        <p>Pet Name: ${food.pet.name}</p>
        <p>Main ingredient: ${food.main_ingredient}</p>
        <p>Also contains: ${food.secondary_ingredient}</p>
        <p>Pet's Score: ${food.score}/10</p>
        <br>
      `)
    $(".modal-body").append(petHTML)
  })
  $("#myModal").modal('show')
}

const getFoodsError = function(error) {
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

const onGetOneFoodSuccess = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('My Food')
    const petHTML = (`
      <p>ID: ${data.food.id}</p>
      <p>Brand: ${data.food.brand_name}</p>
      <p>Pet Name: ${data.food.pet.name}</p>
      <p>Main ingredient: ${data.food.main_ingredient}</p>
      <p>Also contains: ${data.food.secondary_ingredient}</p>
      <p>Pet's Score: ${data.food.score}/10</p>
        <br>
      `)
    $(".modal-body").html(petHTML)
  $("#myModal").modal('show')
}

const getOneFoodError = function(error) {
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

const onDeleteFoodSuccess = function(data) {
  $('.modal-body').html('')
  $("#myModalLabel").html('Food Removed')
    const petHTML = (`
        <p>Food removed from your list!</p>
        <br>
      `)
    $(".modal-body").html(petHTML)
  $("#myModal").modal('show')
}

const deleteFoodError = function(error) {
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

const onUpdateFoodSuccess = function(data) {
  store.food = data.food
  console.log(data.food)
  $('.modal-body').html('')
  $("#myModalLabel").html('Food Updated')
  const scoreHTML = (`
        <h4>Meow! Your food details have been updated!</h4>
        <p>ID: ${store.food.id}</p>
        <p>Brand: ${store.food.brand_name}</p>
        <p>Pet Name: ${store.food.pet.name}</p>
        <p>Main ingredient: ${store.food.main_ingredient}</p>
        <p>Also contains: ${store.food.secondary_ingredient}</p>
        <p>Pet's Score: ${store.food.score}/10</p>
      `)
  $(".modal-body").html(scoreHTML)
  $("#myModal").modal('show')
}

const updateFoodError = function(error) {
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
  onCreatePetSuccess,
  getPetError,
  onGetPetSuccess,
  onGetOnePetSuccess,
  getOnePetError,
  onDeletePetSuccess,
  deletePetError,
  onUpdateSuccess,
  updateError,
  onCreateFoodSuccess,
  createFoodError,
  onGetFoodsSuccess,
  getFoodsError,
  onGetOneFoodSuccess,
  getOneFoodError,
  onDeleteFoodSuccess,
  deleteFoodError,
  onUpdateFoodSuccess,
  updateFoodError
}
