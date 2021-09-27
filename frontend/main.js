const url = "http://localhost:8000/TestModel/?format=json";
fetch(url).then(response => response.json())
.then(data => console.log(data));


let data = [{title: ":)", description: "=D"}, {title: "First", description: "Test"}]

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    console.log(data)
    for (let key of data){
        let th = document.createElement('th');
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
  }

  let table = document.querySelector("table");
  let keys = Object.keys(data[0]);
  generateTableHead(table, keys);