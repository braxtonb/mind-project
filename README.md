# Mind

## Overview

I have an idea for a new project and wanted a place to store all the things that have served as inspiration.

## Technology Stack

**Frontend**

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [React Query](https://react-query.tanstack.com/)
- [React context](https://reactjs.org/docs/context.html) (no Redux for this one)
- [Material UI](https://material-ui.com/)
- [Styled Components](https://styled-components.com/) (could have used only Material UI but wanted to use it)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Formik](https://formik.org/) (form library)
- [Yup](https://github.com/jquense/yup) (form validation)
- [Storybook](https://storybook.js.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [msw](https://mswjs.io/)

**Backend**

- [JSON Server](https://github.com/typicode/json-server)

**Infrastructure**

- [Docker](https://docs.docker.com/)
- [Docker compose](https://docs.docker.com/compose/)
- [Apache web server](https://httpd.apache.org/)


## Setup

**All environments**

(Optional) Update permissions to all shell scripts in the `scripts` directory
```shell
chmod +rwx scripts/*
```

**Local dev**

1. Install dependencies with `./scripts/setup-local.sh`
2. Start containers with `docker-compose up`

**"Production"**

* Build images and run containers for the UI and JSON Server API with `./scripts/start-prod.sh`
* Alternatively, use `docker-compose` with `./scripts/start-prod-docker-compose.sh`

**Other**

If interested, everything can be run locally using `npm run dev` scripts.
```shell
npm run dev --prefix ./mind-json-server
npm run dev --prefix ./mind
```

## Mind Component Library

Run `npm run storybook --prefix ./mind` to start storybook for isolated component development or viewing a component gallery.

## Available NPM Scripts

Looking for what each npm script does? Try `npm run ntl` to select a script to run from a list of commands and their descriptions.

## Useful Links

* [How to setup a simple Apache Web Server in a docker container](https://www.tecmint.com/install-apache-web-server-in-a-docker-container/)