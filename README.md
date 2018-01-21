# ascendant-web 

## Prerequisites
* Angular CLI
* Node.js 9
* NPM

## Setup
1. Run `git clone -b master https://github.com/shanno29/ascendant-web.git`
2. Run `npm install`
3. Config `apiHost` and `apiPort` in `/src/app/_config/config.ts`  

## Running
1. Run `ng serve` defaults to `http://localhost:4200`
1. Run `ng serve --host http://www.exampleWeb.com --port 4200`
2. Navigate to `http://host:port/`, you should see "Hello From Ascendant"

## Tests & Coverage
1. Run `npm test`
2. Run `npm start --host http://www.example.com --port 4200`
3. Navigate to `http://host:port/coverage`

## Build
1. Run `ng build --prod --sourcemaps` to build the project. The build artifacts will be stored in the `dist/` directory. 
2. Replace `/` with `./` in `/dist/index.html`

## Changelog
See the [commit page](https://github.com/shanno29/ascendant-api/commits/master)

## License
[MIT](LICENSE)
