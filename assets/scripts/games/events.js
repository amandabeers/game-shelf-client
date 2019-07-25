'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onIndexGames = () => {
  api.indexGames()
    .then(ui.indexGamesSuccess)
    .catch(ui.indexGamesFailure)
}

const onCreateGame = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createGame(formData)
    .then(() => {
      ui.createGameSuccess()
      onIndexGames()
    })
    .catch(ui.createGameFailure)
}

const addHandlers = () => {
  $('#index-games').on('click', onIndexGames)
  $('#create-game').on('submit', onCreateGame)
}

module.exports = {
  addHandlers
}
