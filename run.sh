#!/usr/bin/env bash

set -e

IMAGE_NAME=katas-image
CONTAINER_NAME=katas-container

# TODO check for a Dockerfile update and build new then too
#if uname | grep -q "Darwin"; then
#    mod_time_fmt="-f %m"
#else
#    mod_time_fmt="-c %Y"
#fi
#stat ${mod_time_fmt} Dockerfile
#docker inspect -f '{{ .Created }}' katas-image

if [[ $(docker inspect --format . ${IMAGE_NAME} 2>&1) != "." ]]; then
  echo "--- BUILDING image '${IMAGE_NAME}'---"
  docker build -t ${IMAGE_NAME} -f Dockerfile .
fi


echo "--- RUNNING container '${CONTAINER_NAME}'---"
docker run --rm \
	--name ${CONTAINER_NAME} \
	--volume $(pwd):/home/node/app \
	${IMAGE_NAME} \
	$1
