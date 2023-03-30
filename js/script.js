function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter Here");

  let weAddButtonOb = document.getElementById("weAddButton");
  let weOb = document.getElementById("we");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter Here");

  let aqAddButtonOb = document.getElementById("aqAddButton");
  let aqOb = document.getElementById("aq");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generating cv

function generateCV() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;

  // direct

  document.getElementById("nameT2").innerHTML = nameField;

  // contact

  document.getElementById("contactT").innerHTML = document.getElementById(
    "contactField"
  ).value;

  // address

  document.getElementById("addressT").innerHTML = document.getElementById(
    "addressField"
  ).value;
  document.getElementById("fbT").innerHTML = document.getElementById(
    "fbField"
  ).value;
  document.getElementById("instaT").innerHTML = document.getElementById(
    "igField"
  ).value;
  document.getElementById("linkedT").innerHTML = document.getElementById(
    "linkedinField"
  ).value;

  // objective

  document.getElementById("objectiveT").innerHTML = document.getElementById(
    "objectiveField"
  ).value;

  // work experience

  let wes = document.getElementsByClassName("weField");

  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str;

  // aq

  let aqs = document.getElementsByClassName("eqField");

  let str1 = "";

  for (let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  // code for setting image
  let file = document.getElementById("imgField").files[0];

  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  // set the image to template
  reader.onloadend = function() {
    document.getElementById("imgTemplate").src = reader.result;
  };
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

// Print CV

function printCV() {
  window.print();
}
