'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onGetShelf = () => {
  api.getShelf()
    .then(ui.getShelfSuccess)
    .catch(ui.getShelfFailure)
}

const onAddToShelf = event => {
  const gameId = $(event.target).data('id')
  store.currGameId = `add-${gameId}`
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

const onUpdateNotes = event => {
  event.preventDefault()
  const shelfId = $(event.target).data('id')
  store.currModalId = `shelf-${shelfId}`
  const form = event.target
  const formData = getFormFields(form)
  api.updateNotes(shelfId, formData)
    .then((responseData) => {
      ui.updateNotesSuccess(responseData)
      onGetShelf()
    })
    .catch(ui.updateNotesFailure)
}

const onDiscardChanges = event => {
  const shelfId = $(event.target).data('id')
  store.currModalId = `shelf-${shelfId}`
  onGetShelf()
  ui.discardChangesSuccess()
}

const onFilterPlayers = event => {
  event.preventDefault()
  const form = event.target
  store.filter = getFormFields(form)
  ui.filterPlayersSuccess()
}

const addHandlers = () => {
  $('#get-shelf').on('click', onGetShelf)
  $('main').on('click', '.add-to-shelf', onAddToShelf)
  $('main').on('click', '.remove-from-shelf', onRemoveFromShelf)
  $('main').on('submit', '.update-notes', onUpdateNotes)
  $('main').on('click', '.discard-changes', onDiscardChanges)
  $('main').on('submit', '#filter-players', onFilterPlayers)
  $('main').on('click', '#unfilter', onGetShelf)
}

module.exports = {
  addHandlers
}
