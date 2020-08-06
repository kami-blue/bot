#!/bin/bash

# shellcheck disable=SC2078
while [ : ]
do
  cat nohup.out | terminal-to-html -preview > index.html
  sleep 1
done