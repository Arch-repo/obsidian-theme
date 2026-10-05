# Anto426 Monet

Wallpaper palette theme for Obsidian, based on [Minimal](https://github.com/kepano/obsidian-minimal) 9.1.1. Minimal's MIT license and attribution are retained. Supports Obsidian 1.13.0 and newer. The CSS contains optional selectors for 1.14 surfaces; these are ignored on older hosts.

`npm ci && npm run build` produces `theme.css`. The desktop installs `manifest.json` and `theme.css` in `.obsidian/themes/Anto426 Monet` and writes `anto426-palette.css` as an enabled CSS snippet. Notes, plugins and unrelated appearance preferences are preserved.

The separate snippet is refreshed by the native wallpaper worker, so a theme update does not overwrite the current palette. `palette/template.css` is the canonical mapping of desktop roles to Minimal and Obsidian variables, including editor, graph, Canvas and Bases. The build uses the same template with the static fallback palette.

Disable Obsidian palette updates in the desktop settings to keep the current colors. After disabling palette updates, remove the snippet or choose another theme in Obsidian to opt out of the installed appearance. Dark surfaces use alpha; text and modal backgrounds stay opaque for readability. On Hyprland the desktop provides window translucency and glass. Other compositors retain their own transparency behavior.
