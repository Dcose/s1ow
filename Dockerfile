# 使用 Node 镜像作为基础
FROM node:latest

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 将当前目录的所有文件复制到工作目录
COPY . .

# 构建 React 应用
RUN npm run build:prod

# 暴露端口
EXPOSE 5223

# 启动应用
CMD ["npm", "start"]
