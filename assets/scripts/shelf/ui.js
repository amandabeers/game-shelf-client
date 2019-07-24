'use strict'

const getShelfTemplate = require('./../templates/get-shelf.handlebars')
const store = require('./../store')

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
