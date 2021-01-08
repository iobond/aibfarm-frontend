#!/bin/bash

git clone https://github.com/iobond/aibfarm-frontend.git
cd aibfarm-frontend
yarn
PORT=8099 yarn start
