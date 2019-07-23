'use strict'

// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onGetShelf = () => {
  api.getShelf()
    .then(ui.getShelfSuccess)
    .catch(ui.getShelfFailure)
}

const onAddToShelf = event => {
  const gameId = $(event.target).data('id')
  api.addToShelf(gameId)
    .then(ui.addToShelfSuccess)
    .catch(ui.addToShelfFailure)
}

const onRemoveFromShelf = event => {
  const shelfId = $(event.target).data('id')
  api.removeFromShelf(shelfId)
    .then(() => {
      ui.removeFromShelfSuccess()
      onGetShelf()
    })
    .catch(ui.removeFromShelfFailure)
}

const addHandlers = () => {
  $('#get-shelf').on('click', onGetShelf)
  $('main').on('click', '.add-to-shelf', onAddToShelf)
  $('main').on('click', '.remove-from-shelf', onRemoveFromShelf)
}

module.exports = {
  addHandlers
}
