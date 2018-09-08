with import (fetchTarball https://github.com/nixos/nixpkgs/tarball/a02002debacc30a151494c0c7b069e0ef2800a60) { };

stdenv.mkDerivation {
    name = "dev-shell";
    src = null;
    buildInputs = [ nodejs-10_x ];
}
