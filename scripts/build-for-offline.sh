#!/bin/bash

ORIGIN_ROOT="."
DIST_ROOT="$ORIGIN_ROOT/dist"

cp -r $ORIGIN_ROOT/vendor $DIST_ROOT;

# replace online refs using offline-refs (so I can work offline too)
if [[ $OSTYPE == darwin* ]]; then
  # replace in index.html
  sed -i '' "s/\/\/cdn.rawgit.com\/jpillora/..\/vendor/g" $DIST_ROOT/proxy.html
else
  echo "To do: make '$0' work on non-Macs";
  exit 1;
fi;
