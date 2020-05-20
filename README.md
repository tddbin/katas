# katas-service
Service providing katas that can be loaded into tddbin.com.

## Develop using Docker

Since it is not common anymore to install any tool like node or alike globally,
docker is being used here.

To develop with nodejs use the following:
- `./run.sh npm install` to install all npm packages, to be able to run the app
- `./run.sh npm test`
- `./run.sh npm run build` generates all files into the `./dist` directory 
- `./run.sh /bin/bash` runs the container and beams you on the shell of this container, where you can work
  like all would be installed, e.g. `npm i` etc. no `./run.sh` prefixing needed.
