export const bulmaTabs = () => {
  const $tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs'), 0);

  
  if ($tabs.length > 0 ) {
    // first initialize
    // Hide all
    let elementsToHide = document.querySelectorAll('.tab-content');
    elementsToHide.forEach( element => {
      element.style.display = 'none';
    });
    console.log(elementsToHide);
    // Show only actives
    let activeList = [];
    $tabs.forEach( tabNav => {
      activeList.push( tabNav.querySelector('.is-active').getAttribute('tab-target') );
    });
    let toShowContents = activeList.map( id => document.getElementById(id) );
    toShowContents.forEach( toShow => toShow.style.display = 'block');

    $tabs.forEach(tabNav => {
      tabNav.querySelectorAll('li').forEach( tab => {
        tab.addEventListener('click', () => {
          // Remove all selected tables
          tabNav.querySelectorAll('li').forEach( tab => {
            tab.classList.remove('is-active');
          });
          tab.classList.add('is-active');

          // Hide all tab content
          let tabNavTargets = Array.from(tabNav.querySelectorAll('li')).map( li => li.getAttribute('tab-target'));
          tabNavTargets = tabNavTargets.map( id => document.getElementById(id))
          // Filter null in array
          tabNavTargets = tabNavTargets.filter((obj) => obj );
          // Hidel all content that owns to this tabs
          tabNavTargets.forEach( tabContent => {
            tabContent.style.display = 'none';
          });
          // Show clicked content
          let toShowId = tab.getAttribute('tab-target');
          let toShow = document.getElementById(toShowId);
          if (toShow) {
            toShow.style.display = 'block';
          }
        });
      });
    });
  }
}