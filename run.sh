#!/bin/bash

echo "Updating!"
pkill -9 node
cd /home/mika/bot
git pull
echo "Don't forget to run log.sh"
nohup node index.js
