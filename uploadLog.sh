#!/bin/bash

cd ~/bot
nc termbin.com 9999 < logs/latest.log
