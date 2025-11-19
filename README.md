# NgPracticalTest
## Task 01
```bash
// here's the task:
  // the page will initially call an api to load the character list
  // the data is paginated, so when the page is changed, you need to load the data of that page
  // when the user types anything in the search field, it also needs to search, the page needs to be resetted to 1
  // search requests should be debounced, and should cancel any previous pending request

  // the api url is:
  // https://rickandmortyapi.com/api/character
  // the search and page data needs to be send in the query params
  // it will be seomthing like this: { name: "searchedValue" or null, page: pageValue }
```

Task 02
```bash
/**
     * here's your task
     * write some css to show only 4 line maximum in the paragraph
     * when it's being overflowed, it should show `...` ellipsis at the end.
     */
```
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.19.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
