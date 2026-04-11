#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo 'Usage: scripts/new-post.sh [--draft] "Post Title" [description] [date]'
}

yaml_escape() {
  local value="${1:-}"
  value=${value//\\/\\\\}
  value=${value//\"/\\\"}
  printf '%s' "$value"
}

DRAFT=false

if [[ ${1:-} == "--draft" ]]; then
  DRAFT=true
  shift
fi

if [[ $# -lt 1 || $# -gt 3 ]]; then
  usage
  exit 1
fi

TITLE="$1"
DESCRIPTION="${2:-}"
DATE="${3:-$(date +%F)}"

if [[ ! "$DATE" =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}$ ]]; then
  echo "Invalid date: $DATE (expected YYYY-MM-DD)"
  exit 1
fi

SLUG="$(printf '%s' "$TITLE" \
  | tr '[:upper:]' '[:lower:]' \
  | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//; s/-+/-/g')"

if [[ -z "$SLUG" ]]; then
  echo "Unable to generate slug from title: $TITLE"
  exit 1
fi

if [[ "$DRAFT" == "true" ]]; then
  DIR="_drafts"
  FILE="${DIR}/${SLUG}.md"
else
  DIR="_posts"
  FILE="${DIR}/${DATE}-${SLUG}.md"
fi

mkdir -p "$DIR"

if [[ -e "$FILE" ]]; then
  echo "Refusing to overwrite existing file: $FILE"
  exit 1
fi

{
  echo "---"
  echo "layout: post"
  printf 'title: "%s"\n' "$(yaml_escape "$TITLE")"
  printf 'date: %s\n' "$DATE"
  if [[ -n "$DESCRIPTION" ]]; then
    printf 'description: "%s"\n' "$(yaml_escape "$DESCRIPTION")"
  fi
  echo "---"
  echo
  echo "Write your introduction here."
  echo
  echo "## Key points"
  echo
  echo "- Add your first point"
  echo "- Add your second point"
  echo "- Add your third point"
  echo
  echo "## Details"
  echo
  echo "Add the main body of the post here."
  echo
  echo "## Closing"
  echo
  echo "Wrap up with the takeaway or next step."
} > "$FILE"

echo "Created $FILE"
