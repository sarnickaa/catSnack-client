const config = require('./config.js')
const store = require('./store.js')

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

const createNewFood = function(data) {
  return $.ajax({
    url: config.apiUrl + '/foods',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "food": {
        "brand_name": `${data.brand_name}`,
        "main_ingredient": `${data.main_ingredient}`,
        "secondary_ingredient": `${data.secondary_ingredient}`,
        "pet_id": `${data.pet_id}`,
        "score": `${data.score}`
      }
    }
  })
}

const getUserFoods = function() {
  return $.ajax({
    url: config.apiUrl + '/foods',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getOneFood = function(data) {
  return $.ajax({
    url: config.apiUrl + '/foods/' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteOneFood = function(data) {
  return $.ajax({
    url: config.apiUrl + '/foods/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateOneFood = function(data) {
  return $.ajax({
    url: config.apiUrl + '/foods/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      "food": {
        "brand_name": `${data.brand_name}`,
        "main_ingredient": `${data.main_ingredient}`,
        "secondary_ingredient": `${data.secondary_ingredient}`,
        "score": `${data.score}`
      }
    }
  })
}

const myShelters = function (data) {
  return $.ajax({
    url: config.apiUrl + '/petfinder/' + data.location,
    method: 'GET'
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

// curl "http://api.petfinder.com/shelter.find?key=4e7ed7382fc8429bc103b2e8a8d4e193&format=json&count=10&name=${NAME}&location=${ZIP}" \
//   --include \
//   --request GET \
//   --header "Authorization: Token token=${TOKEN}" \

module.exports = {
  register,
  login,
  pwChange,
  logout,
  createNewPet,
  getUserPets,
  getOnePet,
  deleteOnePet,
  updateOnePet,
  createNewFood,
  getUserFoods,
  getOneFood,
  deleteOneFood,
  updateOneFood,
  myShelters
}
