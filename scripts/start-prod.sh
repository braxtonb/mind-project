# Build the docker images
npm run buildImage --prefix ./mind-json-server
npm run buildImage --prefix ./mind

# Run docker containers
npm run runContainer --prefix ./mind
npm run runContainer --prefix ./mind-json-server