// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import {renderFormErrors} from './render_form_errors'
import {renderFlashMessage} from './render_flash_message'

import 'css/styles.scss'


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

document.addEventListener("turbolinks:load", function() {
  FontAwesome.dom.i2svg()
  document.addEventListener('ajax:error', (event, request) => renderFlashMessage(event))
  document.addEventListener('ajax:success', (event, request) => renderFlashMessage(event))

  let new_article_form = document.getElementById('new_article_form')
  let edit_article_form = document.getElementById('edit_article_form')

  if (new_article_form) {
    new_article_form.addEventListener("ajax:success", (event) => alert('Article was created.'))
    new_article_form.addEventListener("ajax:error", function(event) {
      renderFormErrors( new_article_form, event.detail[0] )
    })
  }

  if ( edit_article_form ) {
    edit_article_form.addEventListener("ajax:success", (event) => alert('Article was updated.'))
    edit_article_form.addEventListener("ajax:error", (event) => alert(event.details))
  }

})

