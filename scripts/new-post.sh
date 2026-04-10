#!/usr/bin/env bash
set -euo pipefail

if [[ ${1:-} == "" ]]; then
  echo "Usage: scripts/new-post.sh \"Post Title\" [description]"
  exit 1
fi

TITLE="$1"
DESCRIPTION="${2:-}"
DATE="$(date +%F)"
SLUG="$(printf '%s' "$TITLE" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//; s/-+/-/g')"
FILE="_posts/${DATE}-${SLUG}.md"

if [[ -e "$FILE" ]]; then
  echo "Refusing to overwrite existing file: $FILE"
  exit 1
fi

cat > "$FILE" <<EOF
---
layout: post
title: ${TITLE}
date: ${DATE}
${DESCRIPTION:+description: ${DESCRIPTION}}
---

Write your introduction here.

## Key points

- Add your first point
- Add your second point
- Add your third point

## Details

Add the main body of the post here.

## Closing

Wrap up with the takeaway or next step.
EOF

echo "Created $FILE"
