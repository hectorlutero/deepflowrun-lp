#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HOST="${DEPLOY_HOST:-deeprun-bi}"
DEST="${DEPLOY_DEST:-/var/www/deepflowrun}"

cd "$ROOT"
pnpm build
rsync -az --delete \
  --exclude '__next.*' \
  --exclude 'index.txt' \
  --exclude '_not-found.txt' \
  out/ "$HOST:$DEST/"
ssh "$HOST" "chown -R caddy:caddy $DEST && chmod -R a+rX $DEST"
echo "Published to https://deepflowrun.com"
