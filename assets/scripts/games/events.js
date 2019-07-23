'use strict'

const api = require('./api')
const ui = require('./ui')

const onIndexGames = event => {
  api.indexGames()
    .then(ui.indexGamesSuccess)
    .catch(ui.indexGamesFailure)
}

const addHandlers = () => {
  $('#index-games').on('click', onIndexGames)
}

module.exports = {
  addHandlers
}
