#!/bin/bash

if [ -z "${TDDBIN_ROOT_URL:+x}" ]; then
  echo "Can not build. Environment variable 'TDDBIN_ROOT_URL' must be set";
  exit 1;
fi;

# TODO: must be run from project root (i am sure this is not bash best pratice)

ORIGIN_ROOT="."
DIST_ROOT="$ORIGIN_ROOT/dist"

# clean up
rm -Rf ${DIST_ROOT}/*;

# create build directory (structure)
mkdir -p $DIST_ROOT;

# copy assets
node -r esm ./src/deploy.js
cp $ORIGIN_ROOT/CNAME $DIST_ROOT/CNAME;
# don't behave like jekyll, e.g. allow `__raw-metadata__.js` files, which would not be served otherwise
cp $ORIGIN_ROOT/.nojekyll $DIST_ROOT/;

cp $ORIGIN_ROOT/html/proxy.html $DIST_ROOT/;
# replace place holder TDDBIN_ROOT_URL with env var, so it can be different in dev/prod mode
TDDBIN_ROOT_URL_ESCAPED_FOR_SED=$(sed -e 's/[\/&]/\\&/g' <<< ${TDDBIN_ROOT_URL})
if [[ $OSTYPE == darwin* ]]; then
  sed s/\${TDDBIN_ROOT_URL}/$TDDBIN_ROOT_URL_ESCAPED_FOR_SED/g $DIST_ROOT/proxy.html --in-place
else
  sed -i "s/\${TDDBIN_ROOT_URL}/$TDDBIN_ROOT_URL_ESCAPED_FOR_SED/g" $DIST_ROOT/proxy.html
fi;