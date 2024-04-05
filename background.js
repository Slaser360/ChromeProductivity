// List of distracting websites
const distractingWebsites = [
  '*://*.youtube.com/*',
  '*://*.twitter.com/*',
  '*://twitter.com/home/*',
  '*://*.facebook.com/*',
  '*://*.x.com/*',
  '*://*.instagram.com/*',
  '*://*.tiktok.com/*',
  '*://*.reddit.com/*',
  '*://*.pinterest.com/*',
  '*://*.tumblr.com/*',
  '*://*.twitch.tv/*',
  '*://*.netflix.com/*',
  '*://*.hulu.com/*',
  '*://*.amazon.com/Prime-Video/*',
  '*://*.disneyplus.com/*',
  '*://*.snapchat.com/*',
  '*://*.discord.com/*',
  '*://*.imgur.com/*',
  '*://*.giphy.com/*',
  '*://*.9gag.com/*',
  '*://*.buzzfeed.com/*',
  '*://*.vice.com/*',
  '*://*.vox.com/*',
  '*://*.huffpost.com/*',
  '*://*.cnn.com/*',
  '*://*.foxnews.com/*',
  '*://*.nytimes.com/*',
  '*://*.washingtonpost.com/*',
  '*://*.theguardian.com/*',
  '*://*.bbc.com/*',
  '*://*.espn.com/*',
  '*://*.bleacherreport.com/*',
  '*://*.cbssports.com/*',
  '*://*.si.com/*',
  '*://*.nba.com/*',
  '*://*.nfl.com/*',
  '*://*.mlb.com/*',
  '*://*.nhl.com/*',
    // Add more websites as needed
  ];
  
  // Listen for web navigation events
  chrome.webNavigation.onBeforeNavigate.addListener(
    async (details) => {
      // Check if the URL matches any distracting website
      const match = distractingWebsites.some((pattern) => {
        const regex = new RegExp(pattern.replace(/\*/g, '.*'));
        return regex.test(details.url);
      });
  
      // Check if the extension is enabled
      const isEnabled = await chrome.storage.sync.get('isEnabled');
  
      if (isEnabled.isEnabled !== undefined && isEnabled.isEnabled && match) {
        // If it's a distracting website, redirect to the blocked page
        await chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL('blocked.html') });
        return { cancel: true };
      }
    },
    { urls: ['<all_urls>'] }
  );

  function toggleIconColor(isEnabled) {
    if (isEnabled) {
      chrome.action.setIcon({ path: 'icon16-red.png' });
      setTimeout(() => {
        chrome.action.setIcon({ path: 'icon16.png' });
      }, 500);
    } else {
      chrome.action.setIcon({ path: 'icon16.png' });
    }
  }
  
  // Create an alarm to toggle the icon color every second
  chrome.alarms.create('toggleIconAlarm', { periodInMinutes: 1 / 60 });
  
  // Listen for the alarm event
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'toggleIconAlarm') {
      chrome.storage.sync.get('isEnabled', (data) => {
        const isEnabled = data.isEnabled !== undefined ? data.isEnabled : true;
        toggleIconColor(isEnabled);
      });
    }
  });