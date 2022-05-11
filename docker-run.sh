# 获取镜像+运行
source /etc/profile
docker stop vue-electron-demo && docker rm vue-electron-demo
docker rmi $(docker images -q)
docker run --privileged=true --net=host \
	-d --name=vue-electron-demo \
	-e PUBLIC_IP=${PUBLIC_IP} \
	-e PRIVATE_IP=${PRIVATE_IP} \
	10.10.13.81:5000/node/vue-electron-demo:1.0.0
