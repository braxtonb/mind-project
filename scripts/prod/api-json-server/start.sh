# Build the docker images
npm run buildImage:prod --prefix ./mind-api-json-server
npm run buildImage:prod --prefix ./mind

# Run docker containers
npm run runContainer:prod --prefix ./mind-api-json-server
npm run runContainer:prod --prefix ./mind