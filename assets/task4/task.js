// 4. Write a JavaScript function to add rows to a table.

const insert_Row = ()=>{
    const table = document.querySelector("#sampleTable");
    const row = document.createElement("tr");

    let td = document.createElement("td");
    td.textContent = "Row3 cell1";
    row.appendChild(td);

    td = document.createElement("td");
    td.textContent = "Row3 cell2";
    row.appendChild(td);

    table.appendChild(row);
}