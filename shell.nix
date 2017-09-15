with import (fetchTarball https://github.com/nixos/nixpkgs/tarball/be0071c2d7053e994b30c6be373b87e9e8178b8e) { };

stdenv.mkDerivation {
    name = "dev-shell";
    src = null;
    buildInputs = [ nodejs-8_x ];
}
