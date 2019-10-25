// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'css/styles.scss'


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)



document.addEventListener("turbolinks:load", function() {

  new_article_form = document.getElementById('new_article_form')
  edit_article_form = document.getElementById('edit_article_form')
  
  new_article_form.addEventListener("ajax:success", (event) => alert('Article was created.'))
  edit_article_form.addEventListener("ajax:success", (event) => alert('Article was updated.'))

  new_article_form.addEventListener("ajax:error", function(event) {
    console.log(event)
  })
  edit_article_form.addEventListener("ajax:error", (event) => alert(event.details))
})

