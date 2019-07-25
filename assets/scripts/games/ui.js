'use strict'

const indexGamesTemplate = require('./../templates/index-games.handlebars')
// const store = require('./../store')

const indexGamesSuccess = responseData => {
  const showGamesHtml = indexGamesTemplate({ games: responseData.games })
  $('.content').html(showGamesHtml)
  $('#index-games').addClass('active')
  $('#get-shelf').removeClass('active')
}

const indexGamesFailure = () => {
  $('#auth-message').text('Failed to get games')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
}

const createGameSuccess = responseData => {
  $('form').trigger('reset')
  $('#createGameModal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#auth-message').text('Game created')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
}

const createGameFailure = () => {
  $('#auth-message').text('Failed to create game')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
}

module.exports = {
  indexGamesSuccess,
  indexGamesFailure,
  createGameSuccess,
  createGameFailure
}
