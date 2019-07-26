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
}

const getShelfFailure = () => {
  $('#auth-message').text('Failed to get shelf')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
}

const addToShelfSuccess = responseData => {
  $(`#${store.currGameId}`).attr('disabled', true)
  $(`#${store.currGameId}`).attr('title', 'On your shelf')
  $('#auth-message').text('Game added to your shelf')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
}

const addToShelfFailure = () => {
  $('#auth-message').text('Failed to add game to your shelf')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
}

const removeFromShelfSuccess = () => {
  $('#auth-message').text('Game removed from your shelf')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
}

const removeFromShelfFailure = () => {
  $('#auth-message').text('Failed to remove game from your shelf')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
}

const updateNotesSuccess = () => {
  $(`#${store.currModalId}`).modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const updateNotesFailure = () => {
  $(`#${store.currModalId}`).modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#auth-message').text('Failed to update notes')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
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
