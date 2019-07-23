'use strict'

const config = require('./../config')
const store = require('./../store')

const getShelf = () => {
  return $.ajax({
    url: config.apiUrl + '/shelves',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addToShelf = id => {
  return $.ajax({
    url: config.apiUrl + '/shelves',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      shelf: {
        game_id: id,
        notes: ''
      }
    }
  })
}

const removeFromShelf = id => {
  return $.ajax({
    url: config.apiUrl + '/shelves/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getShelf,
  addToShelf,
  removeFromShelf
}
