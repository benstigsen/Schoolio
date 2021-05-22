/// URLs should be encoded for this work properly

function getUrlParameters() {
  // Split URL parameters
  let parameters = window.location.search.split("?")[1].split("&");
  
  // Get decoded keys and values from URL
  let map = {};
  for (let i = 0; i < parameters.length; i++) {
    let pos = parameters[i].indexOf("=");
    let key = decodeURI(parameters[i].substring(0, pos));
    let val = decodeURI(parameters[i].substring(pos + 1));
    
    if (key !== -1 && val !== -1) {
      map[key] = val;
    }
  }
  
  return map;
}

