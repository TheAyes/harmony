let
  pkgs = import <nixpkgs> { };

  libraries = with pkgs;[
    gtk3
    cairo
    gdk-pixbuf
    glib
    dbus
    openssl
    librsvg
    webkitgtk_4_1
  ];

  packages = with pkgs; [
    webkitgtk_4_1
    pkg-config
    dbus
    glib
    gtk3
    libsoup
    appimagekit
    librsvg
    openssl
    rustup
    nodejs_20
  ];
in
pkgs.mkShell {
  buildInputs = packages;

  shellHook =
    ''
      export LD_LIBRARY_PATH=${pkgs.lib.makeLibraryPath libraries}:$LD_LIBRARY_PATH
      export XDG_DATA_DIRS=${pkgs.gsettings-desktop-schemas}/share/gsettings-schemas/${pkgs.gsettings-desktop-schemas.name}:${pkgs.gtk3}/share/gsettings-schemas/${pkgs.gtk3.name}:$XDG_DATA_DIRS
    '';
}
