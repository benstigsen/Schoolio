function initView() {
  let todolist = document.getElementById("todolist");

  // Get todo items
  let request = getUrlParameters();
  
  let content = new DocumentFragment();
  for (const key in request) {
    content.appendChild(addItem(key, request[key]));
  }
  
  // Add <content> to DOM
  todolist.appendChild(content);
}

function initCreate() {
  // This should create textboxes and editable content
}

function addItem(title, description) {
  let fragment = new DocumentFragment();

  let item               = document.createElement("div");
  let elementTitle       = document.createElement("h1");
  let elementDescription = document.createElement("div");
  
  item.classList.add("todoitem");
  elementDescription.classList.add("description");
  
  elementTitle.innerText       = title;
  elementDescription.innerHTML = description;
  
  item.style = "background: rgb(" + getRandomRGB(150, 225) + ")";
  item.appendChild(elementTitle);
  item.appendChild(elementDescription);
  fragment.appendChild(item);
  
  return fragment;
}

function getRandomRGB(min, max) {
  return [  
    Math.random() * (max - min) + min,
    Math.random() * (max - min) + min,
    Math.random() * (max - min) + min
  ].join(",")
}
