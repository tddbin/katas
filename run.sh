#!/usr/bin/env bash

set -o errexit  # fail on simple (non-piped) error
set -o pipefail # also fail on piped commands (e.g. cat myfile.txt | grep timo)
set -o nounset  # fail when accessing unset vars

DOCKERFILE_HASH=$(md5 -q ./Dockerfile)
CONTAINER_NAME=the-katas
IMAGE_NAME=${CONTAINER_NAME}:${DOCKERFILE_HASH}

function is_container_running() {
  if [[ -n $(docker ps --quiet --filter "name=$CONTAINER_NAME") ]]; then
    return 0
  fi;
  return 1
}

if [[ $(docker inspect --format . ${IMAGE_NAME} 2>&1) != "." ]]; then
  echo "--- BUILDING image '${IMAGE_NAME}'---"
  docker build -t ${IMAGE_NAME} - < Dockerfile
fi


if is_container_running; then
  echo "--- ENTER running container '${CONTAINER_NAME}'---"
  docker exec -it ${CONTAINER_NAME} $@
else
  echo "--- RUNNING container '${CONTAINER_NAME}'---"
  docker run --rm -it \
    --name ${CONTAINER_NAME} \
    --volume $(pwd):/app \
    ${IMAGE_NAME} $@
fi
