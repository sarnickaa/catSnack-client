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
    // $("#loginForm").on("submit", api.userLogin)
    $("#change-pw-form").on("submit", events.userPwChange)
    $("#logoutform").on("submit", events.userLogout)
    $("#create-pet").on("submit", events.createPet)
  })
