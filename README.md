# ng6-seed

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Dependencies infos & versions

Previous full update of dependencies: 2018-05-22
* current project version 0.0.1
* node 10.1.x
* npm 6.0.x
* @angular/cli 6.0.3
* @angular/core 6.0.2
* rxjs 6.2.0
* typescript 2.7.2
Update native ng package: `ng update`
Update other dev dependencies: `npm i --save-dev json-server`
Update other dependencies: `npm i --save json-server`

Infos:
- **json-server**: Get a full fake REST API with zero coding in less than 30 seconds (seriously)
_used to provide a fake server for test purpose, especially requests modules jobs like apiService_
- **pm2**: Node.js Production Process Manager with a built-in Load Balancer.
_used to launch json-server test server_