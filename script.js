const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLeads = [];
const listEl = document.getElementById("leads-list");

inputBtn.addEventListener("click", function () {
  // pushing the input value into the array
  const inputValue = inputEl.value;
  // adding the input value to the array
  myLeads.push(inputValue);
  // render each item in the array
  renderLead(inputValue);
  // clear input
  inputEl.value = "";
});

// render out each item in the myLeads array
function renderLead(item) {
  // create an empy list item variable to store each list items
  let listItem = `<li><a href="${item}" target="_blank">${item}</a></li>`;
  listEl.innerHTML += listItem;
}

// Other concepts to know
// listEl.innerHTML += `<li>${item}</li>`;
//create element
// set text content
// append to list
// const li = document.createElement("li");
// li.textContent = item;
// listEl.append(li);
