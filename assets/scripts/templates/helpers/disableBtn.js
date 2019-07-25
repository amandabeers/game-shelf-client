'use strict'

const store = require('./../../store')

const disableBtn = (currGame) => {
  console.log(store.currUserShelf)
  console.log(currGame.id)
  for (let i = 0; i < store.currUserShelf.shelves.length; i++) {
    console.log(store.currUserShelf.shelves[i].game.id)
    if (currGame.id === store.currUserShelf.shelves[i].game.id) {
      return 'disabled'
      // $(`#add-${currGame.id}`).attr('disabled', true)
    } // else {
    // return
    // $(`#add-${currGame.id}`).attr('disabled', false)
    // }
  }
}

module.exports = disableBtn
