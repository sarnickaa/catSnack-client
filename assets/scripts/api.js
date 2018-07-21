const config = require('./config.js')
const store = require('./store.js')
const ui = require('./ui.js')


const register = function(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const login = function(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const pwChange = function(data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const logout = function() {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createNewPet = function(data) {
  return $.ajax({
    url: config.apiUrl + '/pets',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "pet": {
        "name": `${data.name}`,
        "age": `${data.age}`
      }
    }
  })
}

const getUserPets = function() {
  return $.ajax({
    url: config.apiUrl + '/pets',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getOnePet = function(data) {
  return $.ajax({
    url: config.apiUrl + '/pets/' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteOnePet = function(data) {
  return $.ajax({
    url: config.apiUrl + '/pets/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateOnePet = function(data) {
  return $.ajax({
    url: config.apiUrl + '/pets/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "pet": {
        "name": `${data.name}`,
        "age": `${data.age}`
      }
    }
  })
}

module.exports = {
  register,
  login,
  pwChange,
  logout,
  createNewPet,
  getUserPets,
  getOnePet,
  deleteOnePet,
  updateOnePet
}
