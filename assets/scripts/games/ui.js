'use strict'

const indexGamesTemplate = require('./../templates/index-games.handlebars')
// const store = require('./../store')

const indexGamesSuccess = responseData => {
  console.log('Index games success', responseData)
  const showGamesHtml = indexGamesTemplate({ games: responseData.games })
  $('.content').html(showGamesHtml)
  $('#index-games').addClass('active')
  $('#get-shelf').removeClass('active')
}

const indexGamesFailure = () => {
  console.log('Index games failed')
}

const createGameSuccess = responseData => {
  $('form').trigger('reset')
  $('#createGameModal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('Game created', responseData)
}

const createGameFailure = () => {
  console.log('Create game failed')
}

module.exports = {
  indexGamesSuccess,
  indexGamesFailure,
  createGameSuccess,
  createGameFailure
}
