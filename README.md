My portfolio website.

It contains:
* A showcase of the project I worked on
* A basic "blog" for capturing notes about my work expiriences
* A way to contact me

# Development
The website is built with NextJS, and used as a way to learn how to use this framework.

The dev environment is managed trough gitpod. To start a workspace on this project please open
https://gitpod.io#https://github.com/pscamodio/portfolio

To develop:

```bash
# First install the dependencies (done automatically by gitpod)
npm ci

# Then run the dev server
npm run dev
```

# Deployment
A Dockerfile is available to generate a docker image of the website

```bash
# Generate the docker image
docker build . -t portfolio

# Run the generated docker image
docker run --rm -it -p 3000:3000 portfolio
```
