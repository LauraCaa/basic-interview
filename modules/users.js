fetch('../utils/users.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        Users(data)
})
.catch(error => console.error('Error:', error));

    function Users(data) {
        const tbody2 = document.querySelector('#tableData2');
        for(const section2 in data.users) {
            const TableRow = document.createElement('tr');
            TableRow.classList.add('tr2');

            const TablePicture = document.createElement('td');
            const img = document.createElement('img');
            img.src = data.users[section2].picture;
            img.classList.add('img2');
            TablePicture.appendChild(img);
            TableRow.appendChild(TablePicture);
            
            const TableName = document.createElement('td');
            TableName.classList.add('name-td');
            TableName.textContent = data.users[section2].name;
            TableRow.appendChild(TableName);

            const TableDollar = document.createElement('td');
            TableDollar.textContent = "$"
            const span = document.createElement('span');
            span.classList.add('span2');
            TableDollar.classList.add('td2','gray-text');
            TableDollar.appendChild(span);
            TableRow.appendChild(TableDollar);

            const TableBalance = document.createElement('td');
            TableBalance.classList.add('td2', data.users[section2].balance < 0 ? 'red-text':'green-text');
            TableBalance.textContent = data.users[section2].balance;
            TableRow.appendChild(TableBalance);

            tbody2.appendChild(TableRow);
        }
}