const OFF = false;
const ON = true;
var state = ON;

browser.browserAction.onClicked.addListener((tab) => {
  // requires the "tabs" or "activeTab" permission
  console.log('browserAction.onClicked',tab);
  state = !state;
  if (state) {
    browser.browserAction.setTitle({title: 'Maximize Detached Tab : ON'});
    browser.browserAction.setIcon({path: 'icon/switch.svg'});
  } else {
    browser.browserAction.setTitle({title: 'Maximize Detached Tab : OFF'});
    browser.browserAction.setIcon({path: 'icon/switch-off.svg'});
  }
});

// chromeのための初期化
browser.browserAction.setIcon({path: 'icon/switch.svg'});