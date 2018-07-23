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
  api.getOnePet(data)
    .then(ui.onGetOnePetSuccess)
    .catch(ui.getOnePetError)
  $("#see-one-pet")[0].reset()
}

const deletePet = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.deleteOnePet(data)
    .then(ui.onDeletePetSuccess)
    .catch(ui.deletePetError)
  $("#delete-pet")[0].reset()
}

const updatePet = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateOnePet(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.updateError)
  $("#update-pet")[0].reset()
}

const createFood = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createNewFood(data)
    .then(ui.onCreateFoodSuccess)
    .catch(ui.createFoodError)
  $("#create-food")[0].reset()
}

const seeUserFoods = function(event) {
  event.preventDefault()
  api.getUserFoods()
    .then(ui.onGetFoodsSuccess)
    .catch(ui.getFoodsError)
}

const seeOneFood = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.getOneFood(data)
    .then(ui.onGetOneFoodSuccess)
    .catch(ui.getOneFoodError)
  $("#see-one-food")[0].reset()
}

const deleteFood = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.deleteOneFood(data)
    .then(ui.onDeleteFoodSuccess)
    .catch(ui.deleteFoodError)
  $("#delete-food")[0].reset()
}

const updateFood = function(event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateOneFood(data)
    .then(ui.onUpdateFoodSuccess)
    .catch(ui.updateFoodError)
  $("#update-food")[0].reset()
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
  updatePet,
  createFood,
  seeUserFoods,
  seeOneFood,
  deleteFood,
  updateFood
}
