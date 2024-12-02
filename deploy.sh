#!/bin/bash 

echo "自动同步中..."

git pull

COMMIT_MESSAGE="updata"  # 提交信息，可以根据实际情况修改

# 添加所有文件到暂存区
git add .

# 提交暂存区的文件到本地仓库，并添加提交信息
git commit -m "$COMMIT_MESSAGE"

# 将本地提交推送到远程仓库（假设你已经设置好了远程仓库的关联）
git push

# 其他命令
echo "自动同步结束"