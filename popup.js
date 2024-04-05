document.addEventListener('DOMContentLoaded', async function() {
    const toggleButton = document.getElementById('toggleButton');
  
    const data = await chrome.storage.sync.get('isEnabled');
    const isEnabled = data.isEnabled !== undefined ? data.isEnabled : true;
    toggleButton.textContent = isEnabled ? 'Disable Extension' : 'Enable Extension';
  
    toggleButton.addEventListener('click', async function() {
      const data = await chrome.storage.sync.get('isEnabled');
      const isEnabled = data.isEnabled !== undefined ? data.isEnabled : true;
      await chrome.storage.sync.set({ isEnabled: !isEnabled });
      toggleButton.textContent = isEnabled ? 'Enable Extension' : 'Disable Extension';
    });
  });