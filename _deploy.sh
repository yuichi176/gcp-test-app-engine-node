#!/bin/bash

ARG_ENV=$1
case "$ARG_ENV" in
"preview")
  BRANCH=$(git rev-parse --abbrev-ref HEAD | perl -pe "s/[^A-Za-z0-9\n]/-/g;" | cut -c 1-63)
  VERSION=--version=$BRANCH
  NO_PROMOTE='--no-promote'
  ;;
esac

# app deploy
gcloud app deploy --quiet $NO_PROMOTE --project=gcp-test-420611 $VERSION
