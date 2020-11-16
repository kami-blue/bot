#!/bin/bash

cd ~
git pull origin master
pm2 reload bot
