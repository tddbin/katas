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
