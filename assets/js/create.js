let todolist = document.getElementById("todolist");

function initCreate() {
  // Get todo items
  let request = getUrlParameters();
  
  let content = new DocumentFragment();
  for (const key in request) {
    content.appendChild(addItem(key, request[key]));
  }
  
  // Add <content> to DOM
  todolist.appendChild(content);
}

function createItem() {
  let item = addItem("Title Here", "Some description here");
  todolist.appendChild(item);
}

function addItem(title, description) {
  let fragment = new DocumentFragment();

  let item               = document.createElement("div");
  let elementTitle       = document.createElement("h1");
  let elementTextbox     = document.createElement("div");
  let elementDescription = document.createElement("div");
  
  item.classList.add("todoitem");
  elementTextbox.classList.add("description");
  elementDescription.classList.add("description");
  
  elementTitle.setAttribute("contenteditable", "true");
  elementTextbox.setAttribute("contenteditable", "true");
  
  elementTextbox.style.display = "none";
  
  elementTitle.innerText       = title;
  elementTextbox.innerText     = description;
  elementDescription.innerHTML = description;
  
  // Show rendered HTML on textbox unfocus
  elementTextbox.onblur = function () {
    elementDescription.innerHTML = elementTextbox.innerText;
    elementDescription.style.display = "block";
    elementTextbox.style.display = "none";
  }
  
  // Show raw HTML on textbox focus
  elementDescription.onclick = function () {
    elementTextbox.innerText = elementDescription.innerHTML;
    elementDescription.style.display = "none";
    elementTextbox.style.display = "block";
    elementTextbox.focus();
  } 
  
  // Generate random background
  item.style = "background: rgb(" + getRandomRGB(150, 225) + ")";
  item.appendChild(elementTitle);
  item.appendChild(elementTextbox);
  item.appendChild(elementDescription);
  fragment.appendChild(item);
  
  return fragment;
}

function generateURL() {
  let url = "?";
  let items = document.body.getElementsByClassName("todoitem");
  
  let i = 0;
  while (i < items.length) {
    if (i > 0) {
      url += "&";
    }
    
    url += items[i].getElementsByTagName("h1")[0].innerText;
    url += "=";
    url += items[i].getElementsByClassName("description")[1].innerHTML;
    
    i++;
  }
  
  return encodeURI(url);
}

function getRandomRGB(min, max) {
  return [  
    Math.random() * (max - min) + min,
    Math.random() * (max - min) + min,
    Math.random() * (max - min) + min
  ].join(",")
}
