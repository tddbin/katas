#!/bin/bash

# TODO: must be run from project root (i am sure this is not bash best pratice)

ORIGIN_ROOT="."
DIST_ROOT="$ORIGIN_ROOT/dist"

# clean up
rm -Rf $DIST_ROOT;

# create build directory (structure)
mkdir -p $DIST_ROOT;

# copy assets
cp -r $ORIGIN_ROOT/katas $DIST_ROOT;
cp $ORIGIN_ROOT/CNAME $DIST_ROOT/CNAME;

cp $ORIGIN_ROOT/html/proxy.html $DIST_ROOT/;
# replace place holder KATAS_SERVICE_DOMAIN with env var, so it can be different in dev/prod mode
if [[ $OSTYPE == darwin* ]]; then 
  sed -i '' "s/\${TDDBIN_ROOT_DOMAIN}/$TDDBIN_ROOT_DOMAIN/g" $DIST_ROOT/proxy.html
else
  sed -i "s/\${TDDBIN_ROOT_DOMAIN}/$TDDBIN_ROOT_DOMAIN/g" $DIST_ROOT/proxy.html
fi;