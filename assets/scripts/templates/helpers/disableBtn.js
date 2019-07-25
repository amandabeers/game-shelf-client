'use strict'

const store = require('./../../store')

const disableBtn = (currGame) => {
  for (let i = 0; i < store.currUserShelf.shelves.length; i++) {
    if (currGame.id === store.currUserShelf.shelves[i].game.id) {
      return 'disabled'
    }
  }
}

module.exports = disableBtn
