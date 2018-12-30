with import (fetchTarball https://github.com/nixos/nixpkgs/tarball/43e7bfa7a2b73807615e07c8fb6cd6f9070d5434) { };

stdenv.mkDerivation {
    name = "dev-shell";
    src = null;
    buildInputs = [ nodejs-11_x ];
}
