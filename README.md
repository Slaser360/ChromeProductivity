# Chrome Productivity Extension
This is a Chrome extension that helps you stay focused and productive by blocking distracting websites. When enabled, it prevents you from accessing specified websites and redirects you to a "Go back to work" page.

![awesomejob](https://github.com/Slaser360/ChromeProductivity/assets/17171736/d1c56850-0bfa-441f-959a-2fc56c289fae)

# Simple GUI
![enablebutton](https://github.com/Slaser360/ChromeProductivity/assets/17171736/78a1bc92-91cd-4fdc-85c4-3b811ebc2383)

# Flashes When Enabled!
![ezgif-7-0582ba476f](https://github.com/Slaser360/ChromeProductivity/assets/17171736/cf931502-3db5-42c5-a80d-02b7b31c520b)

# Features
Block distracting websites specified in the extension's configuration
Redirect to a custom "Go back to work" page when a blocked website is accessed
Toggle the extension on and off using a popup button
Flashing red icon to indicate when the extension is actively blocking websites

# Installation
Clone or download this repository to your local machine.
Open Google Chrome and navigate to chrome://extensions.
Enable "Developer mode" by toggling the switch in the top-right corner.
Click on "Load unpacked" and select the directory where you cloned/downloaded this repository.
The "Website Blocker" extension should now be installed and visible in your Chrome extensions list.

# Usage
Click on the extension icon in the Chrome toolbar to open the popup.
By default, the extension is enabled and will block the websites specified in the background.js file.
To disable the extension, click on the "Disable Extension" button in the popup. The icon will stop flashing red, indicating that the extension is inactive.
To re-enable the extension, click on the "Enable Extension" button in the popup. The icon will resume flashing red, indicating that the extension is actively blocking websites.
When you try to access a blocked website, you will be redirected to a "Go back to work" page reminding you to stay focused and productive.

# Customization
To add or remove websites to be blocked, modify the distractingWebsites array in the background.js file. Follow the existing pattern format to specify the websites.
To customize the appearance of the "Go back to work" page, modify the blocked.html file. You can change the text, styling, or layout as desired.
To modify the flashing behavior or colors of the extension icon, update the background.js file and the icon files (icon16.png, icon16-red.png, etc.) accordingly.
