const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields')


const userLogin = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.login(data)
    .then(ui.onLoginSuccess)
    .catch(ui.loginError)
    $("#log-in-form")[0].reset()
}

const userRegister = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.register(data)
    .then(ui.onRegisterSuccess)
    .catch(ui.registerError)
    $("#register-form")[0].reset()
}

const userPwChange = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.pwChange(data)
    .then(ui.onPwSuccess)
    .catch(ui.pwError)
  $("#change-pw-form")[0].reset()
}

const userLogout = function(event) {
  event.preventDefault()
  api.logout()
    .then(ui.onLogoutSuccess)
    .catch(ui.logoutError)
  }

  const createPet = function(event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log(data)
    // const pet = data.pet
    api.createNewPet(data)
      .then(ui.onCreatePetSuccess)
      .catch(ui.createPetError)
      $("#create-pet")[0].reset()
  }

  const seeUserPets = function(event) {
    event.preventDefault()
    api.getUserPets()
      .then(ui.onGetPetSuccess)
      .catch(ui.getPetError)
  }

  const seeOnePet = function(event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log(data)
    api.getOnePet(data)
      .then(ui.onGetOnePetSuccess)
      .catch(ui.getOnePetError)
    $("#see-one-pet")[0].reset()
  }

  const deletePet = function(event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log(data)
    api.deleteOnePet(data)
      .then(ui.onDeletePetSuccess)
      .catch(ui.deletePetError)
    $("#delete-pet")[0].reset()
  }

  const updatePet = function(event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log(data)
    api.updateOnePet(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.updateError)
    $("#update-pet")[0].reset()
  }


module.exports = {
  userLogin,
  userRegister,
  userPwChange,
  userLogout,
  createPet,
  seeUserPets,
  seeOnePet,
  deletePet,
  updatePet
}
