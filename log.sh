#!/bin/bash

while [ : ]
do
  cat nohup.out | terminal-to-html -preview > index.html
  sleep 1
done