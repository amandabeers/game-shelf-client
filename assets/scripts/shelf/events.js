'use strict'

// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onGetShelf = event => {
  api.getShelf()
    .then(ui.getShelfSuccess)
    .catch(ui.getShelfFailure)
}

const onAddToShelf = event => {

}

const addHandlers = () => {
  $('#get-shelf').on('click', onGetShelf)
  $('main').on('click', '.add-to-shelf', onAddToShelf)
}

module.exports = {
  addHandlers
}
