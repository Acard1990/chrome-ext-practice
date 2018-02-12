 
console.log("Scotts Chrome extension is running.");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log("Scotts content", message.txt);
  let paragraphs = document.getElementsByTagName('p');
  for (elt of paragraphs) {
    elt.innerHTML = message.txt;
  }
}