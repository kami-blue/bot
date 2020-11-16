#!/bin/bash

cd ~/bot
git pull origin master
pm2 reload bot
