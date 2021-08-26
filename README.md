# Mind

## Overview

I have an idea for a new project and wanted a place to store all the things that have served as inspiration.

I am aware there are many other ways of storing what has inspired me but do they also come with the side effect of working more with React Query?

Oh, they do? Ok nvm. Let me have this.

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

**Backend**

- [JSON Server](https://github.com/typicode/json-server)

**Infrastructure**

- [Docker](https://docs.docker.com/)
- [Docker compose](https://docs.docker.com/compose/)


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

Build images and run containers for the UI and JSON Server API with `./scripts/start-prod.sh`

Alternatively, use `docker-compose` with `./scripts/start-prod-docker-compose.sh`

## Useful Links

* [How to setup a simple Apache Web Server in a docker container](https://www.tecmint.com/install-apache-web-server-in-a-docker-container/)