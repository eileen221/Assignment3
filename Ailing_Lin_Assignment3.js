let body = document.body;
/*

Question 1

Given the following array and implement the table dynamically

*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

let table = document.createElement("table");
table.setAttribute("id", "table");

//headers
let headers = [...tableInfo.tableHeader];
let headerRow = document.createElement("tr");

headers.forEach((ele) => {
  let header = document.createElement("th");
  let textNode = document.createTextNode(ele);
  header.appendChild(textNode);
  headerRow.appendChild(header);
});
table.appendChild(headerRow);

//table cells
let contents = [...tableInfo.tableContent];
console.log(contents);
contents.forEach((ele) => {
  let row = document.createElement("tr");
  Object.values(ele).forEach((text) => {
    let cell = document.createElement("td");
    let textNode = document.createTextNode(text);
    cell.appendChild(textNode);
    row.appendChild(cell);
  });
  table.appendChild(row);
});

body.appendChild(table);

/*

Question 2
Given the array and generate order list and unordered list dynamically as following:

*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let container = document.createElement("div");
container.setAttribute("id", "lists");

let ol = document.createElement("ol");
ol.setAttribute("start", "1");

for (let i = 0; i < list.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = list[i];
  ol.appendChild(li);
}
container.appendChild(ol);

let ul = document.createElement("ul");

for (let i = 0; i < list.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = list[i];
  ul.appendChild(li);
}
container.appendChild(ul);
body.appendChild(container);

/*

Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list

*/

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let selectList = document.createElement("select");
selectList.setAttribute("id", "dropDown");

for (let i = 0; i < dropDownList.length; i++) {
  let option = document.createElement("option");
  option.value = dropDownList[i].value;
  option.text = dropDownList[i].content;
  selectList.appendChild(option);
}

body.appendChild(selectList);
