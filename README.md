# Trial Test

A trial test for creating simple authenticaiton application by using Ant Design, Tailwindcss, Redux toolkit.

## Authors

-   [@syeddanishali](https://github.com/syed-create)

## Installation

Install my-project with npm or with yarn

```bash
  npm install
  yarn install
  cd auth
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/syed-create/auth.git
```

Go to the project directory

```bash
  cd auth
```

Install dependencies

```bash
  npm install or yarn install
```

Start the server

```bash
  checkout to master branch
  npm run start
  yarn start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test or
  yarn test
```

## Features

-   Login
-   Dashboard

## API Reference

#### Login user

```http
  POST https://reqres.in/api/login
```

| Parameter  | Type     | Description                      |
| :--------- | :------- | :------------------------------- |
| `email`    | `string` | **Required**. eve.holt@reqres.in |
| `password` | `string` | **Required**. cityslicka         |

#### Get users

```http
  GET https://reqres.in/api/users
```

## Documentation

Structure of each feautre is isolated and divided into folders so that it can be used anywhere without any problem.

**features** and **folder** structer of the modules.

    auth and dashboard folder have this file structure:
        test: for the test cases

        components: for reusable components

        pages: for main routes and pages

        services: have all the api calles

        store:
            actions: have all the middlewares calling services
            slice: have reducer

    shared:
        utils: for all the utility functions that can be share in the whole app and can be manage easily.

        hooks for all the hooks that can be shared anywhere in the app

        components: shared navigation and ui elements for the reusablity of the code

    routes:
        have all the routes with lazy loading and protected routes.

    store:
        have all the main slices which are persisted in local storage.
