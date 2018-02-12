

console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log('button clicked by user');
    console.log(tab);
    let msg = {
    txt: "This paragraph is mine"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}