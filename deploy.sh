#!/bin/sh
# Publish the portfolio: only the public files go up (CLAUDE.md and the old _1.html stay private). The copy's <style>
# is scaled by scale.mjs, so past 1600 px wide (a big monitor, or a browser zoomed out) the page grows with the screen
# instead of shrinking into the middle; index.html here stays as written.
#   ./deploy.sh build    only build the copy (prints where)
set -e
cd "$(dirname "$0")"
tmp=$(mktemp -d)
cp index.html Aman-Goswami-Resume.pdf "$tmp/"
node scale.mjs "$tmp/index.html"
[ "$1" = "build" ] && { echo "built in $tmp (not deployed)"; exit 0; }
npx wrangler pages deploy "$tmp" --project-name aman-goswami --branch main
