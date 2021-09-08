# Build the docker images
./scripts/prod/api-python/build-image.sh
npm run buildImage:prod --prefix ./mind

# Run docker containers
./scripts/prod/api-python/run-container.sh
npm run runContainer:prod --prefix ./mind