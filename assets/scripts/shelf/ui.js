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

module.exports = {
  getShelfSuccess,
  getShelfFailure
}
