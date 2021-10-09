const url = "http://localhost:8000/TestModel/?format=json";
fetch(url).then(response => response.json())
.then(data => console.log(data));


let json_string = '{"data": [{"title": ":)","description": "=D"}, {"title": "First","description": "Test"}]}'
let data_from_api = JSON.parse(json_string)
console.log(data_from_api.data)
function generateTableHead(table, data) {
    let labels = Object.keys(data.data[0])

    let thead = table.createTHead();
    let row = thead.insertRow();
    console.log(labels)
    for (let label of labels){
        let th = document.createElement('th');
        let text = document.createTextNode(label);
        th.appendChild(text);
        row.appendChild(th);
    }
    
    for(let i = 0; i<data.data.length; i++){
        let tr = document.createElement('tr');
        for(let label of labels){
            let td = document.createElement('td');
            let text = document.createTextNode(data.data[i][label]);
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    
    
    
    
    
    
    

  }

  let table = document.querySelector("table");
  generateTableHead(table, data_from_api);