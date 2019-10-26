export const renderFormErrors = (form, errors) => {

  resetFormAlerts(form)

  for( var key in errors ) {
    var input = form.querySelector(`input[name$="[${key}]"]`)
    let help_tag = input.parentElement.querySelector('.help')
    input.classList.add('is-danger')
    help_tag.classList.add('is-danger')
    help_tag.innerHTML = errors[key][0]
  }

}

const resetFormAlerts = (form) => {
  let controls = form.querySelectorAll('.control')
  controls.forEach( (val, index, obj) => {
    let input_tag = val.querySelector('input')
    let help_tag = val.querySelector('.help')
    if(input_tag != null) {
      console.log(input_tag)
      input_tag.classList.remove('is-danger')
    }

    if(help_tag != null) {
      console.log(help_tag)
      help_tag.classList.remove('is-danger')
    }
    
  })
}