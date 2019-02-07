# hyenas

The world's first homemade PlayStation®Network emulator for PS3® named **Hyenas**. Look at the `www` (public server directory) folder for files. This project is made for the Javascript programming language running on Node.js.

## WOULD EMULATE

- Authentication that would allow you to connect online to the Hyenas Network (PS3 only).
- Get past the sign-in prompt when playing games online (AKA authentication "tickets" signed by Hyenas for custom/unofficial game servers — **but not actually** valid for real game servers, which only allows officially signed actual tickets).

## WILL **NOT** EMULATE

- The PlayStation®Store, PlayStation®Plus, PlayStation®Now, PlayStation®TV, CrossPlay, or anything else that is not required for playing games online.

### Dependencies

- Node.js (https://nodejs.org/en/)

  - [random-seed](https://github.com/skratchdot/random-seed)
  - [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js)
  
  (Just run `npm install` or `yarn install`, depending on your node package manager to install dependencies from the provided `package.json`)

## Running

Running `$ npm start`, `$ yarn start`, or `$ node www/index.js` will start up the HTTP sever.

## Testing

Available pages to test URLs without an actual system

- `/loginform` (`~/www/testingtools/loginform.html`)

- `/profileform` (`~/www/testingtools/profileform.html`)

## License

GPLv3. I did NOT create "PlayStation®Network" nor am I affiliated with any company, subsidiary, party, partner, affiliate, and any licensed licensor, licensee, publisher, developer, merchant, or vendor. This project has been specially crafted to avoid any copyright infringement and even avoids the use of the service name when possible. I am not responsible or liable for any dispute you may have with any entity over this project. This was created for the cause of preservation — for future generations of players to be able to play a more than a decade-old video game system online that has its game servers shutting down and possibly the whole network that is *required* to play any game online. **Nothing malicious is intended.**
