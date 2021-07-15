# Angular Continuous Migration from AngularJS to Angular

Migrating large enterprise angular js codebases to angular

# Why migrate?

- Injection Dependency
- Change Detection
- Dependecy Injection
- Module System
- Angular CLI

# How migrate?

## 1st - Prepare

- Check the [update guide](https://update.angular.io/) from Angular
- Prepare component-based architecture what can be a little hard when we have alot of hierarchical $scopes

## 2nd - Go Hybrid

- Buttom Up Way: Not the best one, but still possible we start from childs to parents

- Top Down Way: Mostly used, we start from parent to childs

## 3th - Continuous Migration

- 1st with routes
- 2nd with services
- 3th with component

# Help

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
