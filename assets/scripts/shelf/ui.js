'use strict'

const getShelfTemplate = require('./../templates/get-shelf.handlebars')
const store = require('./../store')

const getShelfSuccess = responseData => {
  store.currUserShelf = responseData
  if (responseData.shelves.length === 0) {
    $('.content').html('Your shelf is empty')
  } else {
    const showShelfHtml = getShelfTemplate({ shelves: responseData.shelves })
    $('.content').html(showShelfHtml)
  }
  $('#get-shelf').addClass('active')
  $('#index-games').removeClass('active')
  console.log(store.currUserShelf)
}

const getShelfFailure = () => {
  console.log('Get shelf failed')
}

const addToShelfSuccess = responseData => {
  console.log('Game added to shelf', responseData)
  $(`#${store.currGameId}`).attr('disabled', true)
}

const addToShelfFailure = () => {
  console.log('Add to shelf failed')
}

const removeFromShelfSuccess = () => {
  console.log('Game removed from your shelf')
}

const removeFromShelfFailure = () => {
  console.log('Remove from shelf failed')
}

const updateNotesSuccess = () => {
  $(`#${store.currModalId}`).modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('Update notes success')
}

const updateNotesFailure = () => {
  $(`#${store.currModalId}`).modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('Update notes failed')
}

const discardChangesSuccess = () => {
  $(`#${store.currModalId}`).modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

module.exports = {
  getShelfSuccess,
  getShelfFailure,
  addToShelfSuccess,
  addToShelfFailure,
  removeFromShelfSuccess,
  removeFromShelfFailure,
  updateNotesSuccess,
  updateNotesFailure,
  discardChangesSuccess
}
