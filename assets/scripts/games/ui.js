'use strict'

const indexGamesTemplate = require('./../templates/index-games.handlebars')

const indexGamesSuccess = responseData => {
  console.log('Index games success', responseData)
  const showGamesHtml = indexGamesTemplate({ games: responseData.games })
  $('.content').html(showGamesHtml)
}

const indexGamesFailure = () => {
  console.log('Index games failed')
}

module.exports = {
  indexGamesSuccess,
  indexGamesFailure
}
