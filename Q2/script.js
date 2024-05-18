document.addEventListener('DOMContentLoaded', () => {
  const data = [
    { name: 'Rishi', address: 'Mlg', phone: '1234567890' },
    { name: 'Valli', address: 'Hyd', phone: '0987654321' },
    // Add more data here for testing
  ];
  
  const rowsPerPage = 5;
  let currentPage = 1;
  let filteredData = [...data];

  function renderTable(page = 1) {
    const tbody = document.querySelector('#data-table tbody');
    tbody.innerHTML = '';
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filteredData.slice(start, end);

    pageData.forEach(row => {
      const tr = document.createElement('tr');
      Object.values(row).forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    document.getElementById('page-info').textContent = `Page ${page} of ${Math.ceil(filteredData.length / rowsPerPage)}`;
  }

  function sortTable(column, order) {
    filteredData.sort((a, b) => {
      if (a[column] < b[column]) return order === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return order === 'asc' ? 1 : -1;
      return 0;
    });
    renderTable(currentPage);
  }

  function filterTable(query) {
    filteredData = data.filter(row => Object.values(row).some(value => value.toLowerCase().includes(query.toLowerCase())));
    currentPage = 1;
    renderTable(currentPage);
  }

  document.getElementById('search').addEventListener('input', event => {
    filterTable(event.target.value);
  });

  document.querySelectorAll('th').forEach(th => {
    th.addEventListener('click', () => {
      const column = th.getAttribute('data-column');
      const order = th.getAttribute('data-order');
      sortTable(column, order);
      th.setAttribute('data-order', order === 'asc' ? 'desc' : 'asc');
    });
  });

  document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderTable(currentPage);
    }
  });

  document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < Math.ceil(filteredData.length / rowsPerPage)) {
      currentPage++;
      renderTable(currentPage);
    }
  });

  renderTable();
});
