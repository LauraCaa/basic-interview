fetch('../utils/mock-response.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Objeto JSON parseado
    DataProccesor(data)
  })
  .catch(error => console.error('Error:', error));

  function DataProccesor(data) {
    const tbody = document.querySelector('#tableData'); 
  
    for (const section in data.mosaic) {
        const rowSection = document.createElement('tr');
        rowSection.classList.add('tr1')
      
        const columnSection = document.createElement('td');
        columnSection.classList.add('td1','capitalize-style');
        columnSection.textContent = section === "overall" ? Object.keys(data): section;
        rowSection.appendChild(columnSection);
      
        const ColumnScore = document.createElement('td');
        ColumnScore.classList.add('td1', 'text-bold');
        ColumnScore.textContent = data.mosaic[section].score;
        rowSection.appendChild(ColumnScore);
      
        const ColumnChange = document.createElement('td');
        ColumnChange.classList.add('td1', 'text-aling-right', data.mosaic[section].change > 0 ? 'green-text':'red-text');
        ColumnChange.textContent = data.mosaic[section].change === 0 ? null: data.mosaic[section].change;
        rowSection.appendChild(ColumnChange);

        const ColumnDate = document.createElement('td');
        ColumnDate.classList.add('td1', 'text-bold','xs-text');
        ColumnDate.textContent = section === "overall" ? '1-month': null
        rowSection.appendChild(ColumnDate);
        tbody.appendChild(rowSection);
      }
    }

