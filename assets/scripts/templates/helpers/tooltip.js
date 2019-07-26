'use strict'

const store = require('./../../store')

const tooltip = (currGame) => {
  for (let i = 0; i < store.currUserShelf.shelves.length; i++) {
    if (currGame.id === store.currUserShelf.shelves[i].game.id) {
      return 'On your shelf'
    }
  }
  return 'Add to shelf'
}

module.exports = tooltip
