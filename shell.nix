with import (fetchTarball https://github.com/nixos/nixpkgs/tarball/5c7cc53cb720cff0911bbb1c7846216d13d846a7) { };

stdenv.mkDerivation {
    name = "dev-shell";
    src = null;
    buildInputs = [ nodejs-8_x ];
}
