


let json_string = '{"data": [{"title": ":)","description": "=D"}, {"title": "First","description": "Test"}]}'
let data_from_api = JSON.parse(json_string)
function generateTableHead(table, data) {
    let labels = Object.keys(data[0])
    // create table Header
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let label of labels){
        let th = document.createElement('th');
        let text = document.createTextNode(label);
        th.appendChild(text);
        row.appendChild(th);
    }
    // create table content
    for(let i = 0; i<data.length; i++){
        let tr = document.createElement('tr');
        for(let label of labels){
            let td = document.createElement('td');
            let text = document.createTextNode(data[i][label]);
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
  }

  let table = document.querySelector("table");
  

const url = "http://localhost:8000/TestModel/?format=json";
fetch(url).then(response => response.json())
.then(data => generateTableHead(table, data));