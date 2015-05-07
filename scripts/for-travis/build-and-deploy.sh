#!/bin/bash

# connect with `&&` so we only run the next on success
# otherwise we `echo` and `exit 1`

if [ $TRAVIS_PULL_REQUEST == "false" ]; then
  npm run build && ./scripts/for-travis/deploy-master-branch-only.sh ||
  { echo "Ooops, ERROR cant deploy, see error(s) above"; exit 1; }
else
  echo "deploy: pull requests don't get deployed"
fi
