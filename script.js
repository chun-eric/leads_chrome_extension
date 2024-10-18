// declaring variables
let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const listEl = document.getElementById("leads-list");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// get the leads from local storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// setting getItem conditions for truthy and falsy
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// setting up tabs
const tabs = [{ url: "https://www.linkedin.com/in/per-harald-borgen/" }];

tabBtn.addEventListener("click", function () {
  // grab url from the current tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });

  // push the url to the array
  myLeads.push(tabs[0].url);

  // save our array values to local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  // render updated list
  render(myLeads);
});

// render out each item in the myLeads array
function render(leads) {
  // create an empy list item variable to store each list items
  if (Array.isArray(leads) && leads.length > 0) {
    // Create HTML string from leads array
    let leadsList = leads
      .map(
        (lead) => `
      <li>
        <a href="${lead}" target="_blank">${lead}</a>
      </li>
      `
      )
      .join("");
    console.log("Generated HTML:", leadsList);
    listEl.innerHTML = leadsList;
  } else {
    console.log("Leads is either not an array or is empty");
    // If leads is not an array or is empty, clear the list
    listEl.innerHTML = "";
  }
}

// double clicking the delete button
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  // clear the dom
  render(myLeads);
});

// clicking the save input button
inputBtn.addEventListener("click", function () {
  // pushing the input value into the array
  const inputValue = inputEl.value;
  // adding the input value to the array
  myLeads.push(inputValue);

  // save our array values to local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  // render updated list
  render(myLeads);

  // clear input
  inputEl.value = "";
});

/*







































*/
// Other concepts to know
// listEl.innerHTML += `<li>${item}</li>`;
//create element
// set text content
// append to list
// const li = document.createElement("li");
// li.textContent = item;
// listEl.append(li);
