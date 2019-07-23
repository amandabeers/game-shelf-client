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

module.exports = {
  getShelf
}
