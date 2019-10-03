# firefox-session-rebuild
A Firefox WebExtension that rebuilds the windows and tabs from a damaged sessionstore.json file.

## Usage

Open the sessionstore.json (or file in the same format, such as previous.json or recovery.json)
in a tab in Firefox. Switch to the raw data view. Then click the toolbar button for this extension.

It should then start creating new windows for each window in the JSON, adding the tabs to each one as it goes.