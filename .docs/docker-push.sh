#!/usr/bin/env bash
export APP_NAME=rasweb
#rm -rf target
#ng build --prod
export VERSION=$(git rev-parse --short HEAD)
docker build -t khawarhere/$APP_NAME:$VERSION .
docker image push khawarhere/$APP_NAME:$VERSION
cat .docs/deployment.yaml | sed -e "s/@KVERSION/$VERSION/g" -e "s/@KAPP_NAME/$APP_NAME/g" | kubectl apply -f-