export const renderFlashMessage = function(event) {
  let request = event.detail[2];
  let message = request.getResponseHeader('X-Message');
  let type    = request.getResponseHeader('X-Message-Type');

  if (message) {

    let notifications = document.getElementById('notifications');
    let notification = document.createElement('div');
    let close_button = document.createElement('button');
    // let message      = document.createTextNode(message);
    notifications.innerHTML = ''

    switch (type) {
      case 'error':   notification.setAttribute('class', 'notification is-danger'); break;
      case 'warning': notification.setAttribute('class', 'notification is-warning'); break;
      case 'notice':  notification.setAttribute('class', 'notification is-success'); break;
      default: break;
    }

    close_button.setAttribute('class', 'delete');
    notification.appendChild(close_button);
    notification.innerHTML += (message);
    notifications.appendChild(notification);
    // notifications.innerHTML = notifications_as_string
    // let notification = new DOMParser().parseFromString(notifications_as_string, 'text/html')
    // notifications.getRootNode()
    // notifications.appendChild(notification.body)

    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
      let $notification = $delete.parentNode;
      $delete.addEventListener('click', () => {
        $notification.parentNode.removeChild($notification);
      })
    })
    
  }
}