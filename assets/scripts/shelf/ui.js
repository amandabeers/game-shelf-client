'use strict'

const getShelfTemplate = require('./../templates/get-shelf.handlebars')

const getShelfSuccess = responseData => {
  console.log('Get shelf success', responseData)
  const showShelfHtml = getShelfTemplate({ shelves: responseData.shelves })
  $('.content').html(showShelfHtml)
}

const getShelfFailure = () => {
  console.log('Get shelf failed')
}

const addToShelfSuccess = responseData => {
  console.log('Game added to shelf', responseData)
}

const addToShelfFailure = () => {
  console.log('Add to shelf failed')
}

module.exports = {
  getShelfSuccess,
  getShelfFailure,
  addToShelfSuccess,
  addToShelfFailure
}
