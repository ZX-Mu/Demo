#制定node镜像的版本
#FROM node:10 AS stage-one
#MAINTAINER Jerome
#移动当前目录下面的文件到app目录下
#ADD ./dist /opt/smooth-video-call/
#进入到app目录下面，类似cd
#WORKDIR /opt/smooth-video-call

#使用淘宝镜像
#RUN npm config set registry http://10.10.202.227:4873
#安装依赖
#RUN npm install npm -g
#RUN npm install
#对外暴露的端口
#EXPOSE 8080
#RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
#程序启动脚本
#CMD ["npm", "start"]
#CMD ["nginx","-g","daemon off;"]


FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/
COPY dist/ /usr/share/nginx/html/
