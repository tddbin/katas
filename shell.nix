with import (fetchTarball https://github.com/nixos/nixpkgs/tarball/525f0b043652cb62192874054d7aca5843d45e8f) { };

stdenv.mkDerivation {
    name = "dev-shell";
    src = null;
    buildInputs = [ nodejs-12_x ];
}
