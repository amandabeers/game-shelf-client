'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gamesEvents = require('./games/events.js')
const shelfEvents = require('./shelf/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
  gamesEvents.addHandlers()
  shelfEvents.addHandlers()
})
