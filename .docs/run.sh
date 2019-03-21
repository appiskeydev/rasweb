#!/usr/bin/env bash
sudo npm install
sudo ng build --configuration=dev

sudo ng serve --configuration=dev

sudo ng build --configuration=production

sudo ng serve --configuration=production
