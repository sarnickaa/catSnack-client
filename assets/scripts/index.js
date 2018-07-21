'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')
// const ui = require('./ui.js')

$(() => {
    $("#log-in-form").on("submit", events.userLogin)
    $("#register-form").on("submit", events.userRegister)
    $("#change-pw-form").on("submit", events.userPwChange)
    $("#logoutform").on("submit", events.userLogout)
    $("#create-pet").on("submit", events.createPet)
    $("#see-pets").on("submit", events.seeUserPets)
    $("#see-one-pet").on("submit", events.seeOnePet)
    $("#delete-pet").on("submit", events.deletePet)
    $("#update-pet").on("submit", events.updatePet)
    $("#create-food").on("submit", events.createFood)
    $("#see-foods").on("submit", events.seeUserFoods)
    $("#see-one-food").on("submit", events.seeOneFood)
    $("#delete-food").on("submit", events.deleteFood)
    $("#update-food").on("submit", events.updateFood)
  })
