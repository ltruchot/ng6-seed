# ng6-seed

## install factory
1. Choose your version of the factory, by choosing a branch.
..* `master`: evething (core + multilanguage)
..* `core`: only well formed scaffolding && basic features (CoreModule, apiService, basic router outlet)
..* `core+multilang`: core + a fully integreted translation system with `@ngx-translate/core`
..* `core+store`: core + a redux `@ngrx/store` fully angular compliant, with examples 
..* `core+auth`: core + a classic register/login/user/logout token based auth.
..* `core+multilang+store`: @see above 
2. Create a new folder for your project. Copy every files and folders except `node_modules`, `dist`, `package-lock.json`
3. In your project, modify package.json project name, and other infos (you can replace ng6-seed by your project-name everywhere)

## serve & build app

To serve, run `npm i && npm start` and navigate to `http://localhost:4200/`

To build (prod AOT), run `npm run build` and deliver the fresh generated `dist` folder

## Code scaffolding

Run `ng generate component <component-name>` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

To launch unit-tests: `npm test`, it will automatically run the `json-server` dep as a pre/post hook 

In case of error, `json-server`will continue to run, so you can run `ng test`and debug your tests

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests.

## add a new feature in the store

* Navigate to the root of the store `cd src/app/store`
* Then generate a new feature: `ng generate feature <name> --reducers reducers/index.ts --flat false`
* Then generate a custom service if needed `ng g service store-<name>`. 
WARNING: This service wil be 100% dedicated to help the store freture concerned, and nothing else.
* Finally:
..* add new effect in `src/app/store/store-effects.index.ts` list 
..* add new service in `src/app/store/store-services.index.ts` list 

@see documentation  https://github.com/ngrx/platform/blob/master/docs/schematics/feature.md

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Dependencies infos & versions

Previous full update of dependencies: 2018-05-29
* current project version 0.1.0
* node 10.2.x
* npm 6.1.x
* @angular/cli 6.0.5
* @angular/core 6.0.3
* rxjs 6.2.0
* typescript 2.7.2

Update native ng package: `ng update`

Update other dependencies: `ng update --all`

Infos:
* **json-server**: Get a full fake REST API with zero coding in less than 30 seconds (seriously)
- _used to provide a fake server for test purpose, especially requests modules jobs like apiService_
* **pm2**: Node.js Production Process Manager with a built-in Load Balancer.
- _used to launch json-server test server_
* **@ngx-translate/core**: The internationalization (i18n) library for Angular
* **@ngx-translate/http-loader**: A loader for ngx-translate that loads translations with http calls
<<<<<<< HEAD
* **@ngrx/store**: RxJS powered state management for Angular applications, inspired by Redux
=======
* **@ngrx/store**: RxJS powered state management for Angular applications, inspired by Redux
>>>>>>> core
