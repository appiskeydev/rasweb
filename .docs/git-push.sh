#!/usr/bin/env bash

#eval $(minikube docker-env)


git add .
git commit -m "updated via script"
git checkout -b feature/from-script
git push origin feature/from-script
