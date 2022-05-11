#!/bin/bash

docker build -t 10.10.13.81:5000/node/vue-electron-demo:1.0.0 .

docker push 10.10.13.81:5000/node/vue-electron-demo:1.0.0


# Mac M1上的编译命令
#docker buildx build --platform linux/amd64 --load  -t 10.10.13.81:5000/node/vue-electron-demo:1.0.0 .
#docker push 10.10.13.81:5000/node/vue-electron-demo:1.0.0

