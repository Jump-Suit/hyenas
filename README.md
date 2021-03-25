# Hyenas

![Hyenas Screenshot](Screenshot.png?raw=true)
**Hyenas is the world's first homemade PlayStation®Network emulator for the PS3®**. Look at the `www` (public server directory) folder for files. This project is made for the Javascript programming language running on Node.js.

## Features

- ✓ Authentication that would allow you to play games online ultra fast and mega securely.
- ✓ Get past the sign-in prompt when playing games online (mocked ticket authentication).
- ✓ Completely isolated from the actual servers, which means console-bans are a non-issue.
- ✓ Guaranteed to be able to play the games you've played as a kid (with your future children.)
- ✕ The PlayStation®Store, PlayStation®Plus, PlayStation®Now, PlayStation®TV, CrossPlay, etc…

## Requirements
* [NodeJS](https://nodejs.org)
* [Express](https://www.npmjs.com/package/express)
* [UPDNS](https://www.npmjs.com/package/updns)
* [MySQL](https://www.mysql.com/downloads/)

## Installation
[Work In Progress]
`npm install` or `yarn install`

## Testing

Test by rerouting the Sony domains to your local PC IP in the *hosts* example file in the repo coping the contents *to the one in updns approaming folder of node in your User Folder!*  
Redirect your PC Local IP as your Primary DNS in PS3, and congrats! **Hyenas can communicate with your PS3! (WOO!!)**

`node index.js`

## Licensing

General Public License v3.0. All trademarks and copyright-written content found belong to their respective owners.
