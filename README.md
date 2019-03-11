# Hyenas
**Hyenas is the world's first homemade PlayStation®Network emulator for the PS3®**. Look at the `www` (public server directory) folder for files. This project is made for the Javascript programming language running on Node.js.

## Features
- ✓ Authentication that would allow you to play games online ultra fast and mega securely.
- ✓ Get past the sign-in prompt when playing games online (mocked ticket authentication).
- ✓ Completely isolated from the actual servers, which means console-bans are a non-issue.
- ✓ Guaranteed to be able to play with your future children the games you've played as a kid.
- 🗙 The PlayStation®Store, PlayStation®Plus, PlayStation®Now, PlayStation®TV, CrossPlay, etc…

## Installation
First install the required dependencies with `npm install` or `yarn install`.

Then run `$ npm start`, `$ yarn start`, or `$ node www/index.js` to start up the HTTPD sever.

## Testing
Hyenas can be coded and tested without an actual system, provided that you have an API map.

There is built-in URLs for testing (ie: forms to do POST requests).

| Absolute URI   | Function |
| -------------- |----------|
| `/loginform`   | `~/www/testingtools/loginform.html` |
| `/profileform` | `~/www/testingtools/profileform.html` |

## License

GPLv3. I did NOT create "PlayStation®Network" NOR am I affiliated with any company, subsidiary, party, partner, affiliate, and any licensed licensor, licensee, publisher, developer, merchant, or vendor. This project has been specially crafted to avoid any copyright infringement and even avoids the use of the service name when possible. I am not responsible or liable for any dispute you may have with any entity over this project. This was created for the cause of preservation — for future generations of players to be able to play decades-old video games online that has its servers shutting down… and possibly the whole network that is *required* to play any game online. **Nothing malicious is intended. For legal disputes, please email** (base64) `am9uaHlwZXJzb21AZ21haWwuY29t`.
