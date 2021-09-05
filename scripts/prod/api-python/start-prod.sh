# Build the docker images
npm run buildImage:prod --prefix ./mind-api-python
npm run buildImage:prod --prefix ./mind

# Run docker containers
npm run runContainer:prod --prefix ./mind-api-python
npm run runContainer:prod --prefix ./mind