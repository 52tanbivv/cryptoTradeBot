# kassy.ru

> band management application

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Style Guide

StandardJS Style Guide

# CSS PreProcessor

This project uses Stylus as the css preprocessor. Stylus is incredibly flexible.

# Design Framework

Built with Material Design by Google using [Vue-Material](https://marcosmoura.github.io/vue-material/#/)

# Color Palette

> To be created

# Branch Naming Conventions
When creating a new feature branch, it should be named semantically.
Branch names should include the issue number that they relate to from Waffle.

Example: "user-auth-2"

This means you're working on user authentication features, corresponding to issue #2 in Waffle.

All branch names should be in kebab-case. Do not use capital letters or special characters in branch names.

Branch names should only contain lower case letters and numbers separated by `-`.

# Creating a new issue

If you find a bug or have a feature request, create an issue in Waffle (you can also do this through Github) and the issue will be dealt with and assigned accordingly.

# Building for Production

We use Docker to build for production.

We're currently building off of the `kyma/docker-nginx` image.

You can find documentation for this image at [here](https://github.com/KyleAMathews/docker-nginx)


```
# Build the app for production
$ npm run build

# Build a docker image
docker build -t hivemindapps/bandforge-vue-nginx:latest .

# Run the image to test and make sure everything works locally
$ docker run -p 80:80 -d hivemindapps/bandforge-vue-nginx

# Point your browser to localhost and you should see the app pull up.
```
