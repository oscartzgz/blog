export const selectableTable = () => {

  const $tables = Array.prototype.slice.call(document.querySelectorAll('.table-selectable'), 0);

  if ($tables.length > 0) {
    $tables.forEach( table => {
      table.querySelectorAll('tr').forEach( tr => {
        tr.addEventListener('click', () => {
          clearSelectedRows(table);
          tr.classList.add('is-selected');
        });
      });
    });
  }

  function clearSelectedRows(table) {
    table.querySelectorAll('tr').forEach( tr => {
      tr.classList.remove('is-selected');
    });
  }
}