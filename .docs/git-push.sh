#!/usr/bin/env bash

#eval $(minikube docker-env)

#./mvnw package
./mvnw -DskipTests package
git add .
git commit -m "updated via script"
git checkout -b feature/from-script
git push origin feature/from-script
