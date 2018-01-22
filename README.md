# ascendant-web 

## Prerequisites
* Node.js 9
* NPM
* Angular CLI


## Deployment
1. Run `git clone -b master https://github.com/shanno29/ascendant-web.git`

2. Run `npm install` this installs all needed libraries to `/node_modules`

3. Config `apiHost` and `apiPort` in `/src/app/_config/config.ts` 

4. Run `ng build --prod --sourcemaps --base-href /exampleUrl` to build the project. 

5. The newly generated site can be found in `./dist`. 
 
- `--prod` ->  production mode
- `--sourcemaps` -> needed for generation
- `--base-href /exampleUrl` -> set your base url here
- additional help `https://angular.io/guide/deployment#production-servers` 
 
## Dev
1. Run `ng serve` defaults to `http://localhost:4200`
1. Or `ng serve --host http://www.exampleWeb.com --port 1234`
2. Navigate to `http://host:port/exampleUrl` to view your site"

## Changelog
See the [commit page](https://github.com/shanno29/ascendant-api/commits/master)

## License
[MIT](LICENSE)
