# firefox-session-rebuild
A Firefox WebExtension that rebuilds the windows and tabs from a damaged `sessionstore.json` file.

## Usage

### Preparation

Before rebuilding your environment from JSON backup files, you need to do some setup work.

* Change the `devtools.jsonview.enabled` preference to `false` in `about:config`. This ensures that
the JSON will load as raw data.

### Rebuilding windows and tabs

Open the `sessionstore.json` (or file in the same format, such as `previous.json` or `recovery.json`)
in a tab in Firefox, then click the toolbar button for this extension.

It should then start creating new windows for each window in the JSON, adding the tabs to each one as it goes.

## Dealing with .jsonlz4 files

Modern Firefox compresses these JSON files using LZ4. You need to decompress them to JSON before using this tool.
See [dejsonlz4](https://github.com/avih/dejsonlz4) for a tool that can do this.
