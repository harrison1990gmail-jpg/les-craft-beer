# LE'S CRAFT BEER 官网交付文档

项目名称：LE'S CRAFT BEER 南昌本土精酿啤酒屋官网  
技术栈：Next.js + Tailwind CSS  
页面：首页、关于我们、产品服务、案例中心、联系我们  
Logo 图标：繁体字「樂」  

## 1. 项目结构

```text
website
├─ assets
│  └─ siteData.js              # 全站基础文案、联系方式、案例、服务数据
├─ components
│  ├─ CaseCard.jsx             # 案例卡片
│  ├─ ContactForm.jsx          # 留资表单
│  ├─ CTASection.jsx           # 转化按钮区
│  ├─ Footer.jsx               # 页脚
│  ├─ Header.jsx               # 导航
│  ├─ Layout.jsx               # 页面布局
│  ├─ Logo.jsx                 # 樂 Logo
│  ├─ MapBlock.jsx             # 地图模块
│  ├─ SEO.jsx                  # SEO 信息
│  ├─ SectionTitle.jsx         # 区块标题
│  └─ ServiceCard.jsx          # 服务卡片
├─ pages
│  ├─ _app.jsx
│  ├─ index.jsx                # 首页
│  ├─ about.jsx                # 关于我们
│  ├─ services.jsx             # 产品服务
│  ├─ cases.jsx                # 案例中心
│  └─ contact.jsx              # 联系我们
├─ public
│  └─ assets                   # 网站图片、favicon、OG 图
├─ styles
│  └─ globals.css              # 全局样式
├─ .eslintrc.json
├─ .gitignore
├─ next.config.js
├─ package.json
├─ postcss.config.js
└─ tailwind.config.js
```

## 2. 第一部分：项目检查

### 已完成检查

```text
必需文件：通过
页面数量：5 个正式页面
组件数量：11 个
相对 import：通过
品牌数据读取：通过
Logo 字符「樂」：通过
无明显 TODO / undefined 占位：通过
```

### 依赖检查

当前依赖都是有效依赖，暂不删除。

```text
next：Next.js 框架
react / react-dom：页面运行必需
lucide-react：图标组件
tailwindcss / postcss / autoprefixer：样式构建必需
eslint / eslint-config-next：代码检查必需
```

### 当前机器限制

当前电脑环境没有可用的 `npm`，并且系统拒绝执行当前 PATH 中的 `node.exe`，所以本机暂时无法真实执行 `npm install` 和 `npm run build`。

需要先安装 Node.js LTS：

```text
https://nodejs.org/
```

安装完成后重新打开终端，再执行下面命令。

## 3. 启动方法

### 安装命令

```bash
cd "C:\Users\Z3532\Documents\啤酒屋\website"
npm install
```

### 本地启动命令

```bash
npm run dev
```

### 运行地址

```text
http://localhost:3000
```

### 代码检查命令

```bash
npm run lint
```

### 打包命令

```bash
npm run build
```

当前项目已配置静态导出：

```js
output: 'export'
```

构建成功后会生成：

```text
out
```

## 4. 第二部分：部署方案 A - 免费部署到 Vercel

适合：官网展示、轻量更新、低成本上线。

### 4.1 注册步骤

1. 打开 [Vercel](https://vercel.com)。
2. 使用 GitHub、GitLab、Bitbucket 或邮箱注册。
3. 建议使用 GitHub 注册，后续上传和自动部署最方便。

### 4.2 上传步骤

推荐方式：上传到 GitHub。

```bash
cd "C:\Users\Z3532\Documents\啤酒屋\website"
git init
git add .
git commit -m "Initial LE'S CRAFT BEER website"
git branch -M main
git remote add origin https://github.com/你的账号/les-craft-beer-website.git
git push -u origin main
```

如果本机没有 Git，可以先安装：

```text
https://git-scm.com/
```

### 4.3 部署步骤

1. 登录 Vercel。
2. 点击 `Add New Project`。
3. 选择 GitHub 仓库 `les-craft-beer-website`。
4. Framework Preset 选择 `Next.js`。
5. Build Command 使用：

```bash
npm run build
```

6. Output Directory 使用：

```text
out
```

7. 点击 `Deploy`。

### 4.4 最终访问地址

部署成功后，Vercel 会生成类似地址：

```text
https://les-craft-beer-website.vercel.app
```

绑定自有域名后，建议最终地址：

```text
https://www.lescraftbeer.com
```

## 5. 第二部分：部署方案 B - 企业云服务器

适合：要做长期品牌官网、绑定后台、接入企业数据、保留服务器控制权。

### 5.1 服务器配置推荐

入门配置：

```text
CPU：2 核
内存：2 GB
硬盘：40 GB SSD
带宽：3 Mbps
系统：Ubuntu 22.04 LTS
适合：官网展示 + 少量访问
```

推荐配置：

```text
CPU：2 核或 4 核
内存：4 GB
硬盘：80 GB SSD
带宽：5 Mbps
系统：Ubuntu 22.04 LTS
适合：官网 + 后台 CMS + 表单数据 + 图片管理
```

推荐云厂商：

```text
阿里云
腾讯云
华为云
雨云
UCloud
```

### 5.2 Linux 安装命令

登录服务器：

```bash
ssh root@你的服务器IP
```

更新系统：

```bash
apt update && apt upgrade -y
```

安装 Nginx：

```bash
apt install nginx -y
systemctl enable nginx
systemctl start nginx
```

安装 Node.js LTS：

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt install nodejs -y
node -v
npm -v
```

上传项目后构建：

```bash
cd /www/wwwroot/lescraftbeer
npm install
npm run build
```

### 5.3 Nginx 配置

创建配置文件：

```bash
nano /etc/nginx/sites-available/lescraftbeer.com
```

写入：

```nginx
server {
    listen 80;
    server_name lescraftbeer.com www.lescraftbeer.com;

    root /www/wwwroot/lescraftbeer/out;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    access_log /var/log/nginx/lescraftbeer.access.log;
    error_log /var/log/nginx/lescraftbeer.error.log;
}
```

启用站点：

```bash
ln -s /etc/nginx/sites-available/lescraftbeer.com /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

### 5.4 HTTPS 配置

安装 Certbot：

```bash
apt install certbot python3-certbot-nginx -y
```

申请证书：

```bash
certbot --nginx -d lescraftbeer.com -d www.lescraftbeer.com
```

检查自动续期：

```bash
certbot renew --dry-run
```

### 5.5 域名绑定

在域名服务商 DNS 后台添加：

```text
主机记录：@
记录类型：A
记录值：服务器公网 IP

主机记录：www
记录类型：A
记录值：服务器公网 IP
```

等待 5 分钟到 24 小时生效。

## 6. 第三部分：后台管理

目标：让老板或运营人员无需写代码即可维护官网内容。

推荐方案：Directus。  
备选方案：Strapi。

### 6.1 为什么推荐 Directus

```text
中文后台体验更直接
内容模型配置快
适合管理文案、图片、案例、联系方式、SEO
可以直接管理数据库
后续可接入官网 API 或静态生成
```

### 6.2 后台地址建议

推荐使用二级域名：

```text
https://admin.lescraftbeer.com
```

如果必须使用 `/admin`：

```text
https://www.lescraftbeer.com/admin
```

企业服务器可用 Nginx 反向代理实现 `/admin`。

### 6.3 Directus 可维护内容

后台集合建议：

```text
home_page
- 首页标题
- 首页副标题
- Banner 图片
- CTA 按钮文案

site_contact
- 电话
- 微信
- 地址
- 营业时间
- 地图坐标

cases
- 案例标题
- 案例图片
- 项目类型
- 项目详情
- 项目亮点

leads
- 客户姓名
- 手机号码
- 咨询类型
- 预计人数
- 预计日期
- 备注需求
- 提交时间

seo_settings
- 网站标题
- 网站描述
- 关键词
- OG 图片
```

### 6.4 Directus 安装命令

在服务器安装 Docker：

```bash
apt install docker.io docker-compose-plugin -y
systemctl enable docker
systemctl start docker
```

创建 Directus 目录：

```bash
mkdir -p /www/directus
cd /www/directus
```

创建 `docker-compose.yml`：

```yaml
services:
  directus:
    image: directus/directus:latest
    ports:
      - "8055:8055"
    volumes:
      - ./database:/directus/database
      - ./uploads:/directus/uploads
      - ./extensions:/directus/extensions
    environment:
      SECRET: "replace-with-a-long-random-secret"
      ADMIN_EMAIL: "admin@lescraftbeer.com"
      ADMIN_PASSWORD: "change-this-password"
      DB_CLIENT: "sqlite3"
      DB_FILENAME: "/directus/database/data.db"
      WEBSOCKETS_ENABLED: "true"
```

启动：

```bash
docker compose up -d
```

访问：

```text
http://服务器IP:8055
```

### 6.5 Nginx 绑定后台

后台二级域名配置：

```nginx
server {
    listen 80;
    server_name admin.lescraftbeer.com;

    location / {
        proxy_pass http://127.0.0.1:8055;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

申请 HTTPS：

```bash
certbot --nginx -d admin.lescraftbeer.com
```

如果一定要使用 `/admin` 路径：

```nginx
location /admin/ {
    proxy_pass http://127.0.0.1:8055/admin/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

### 6.6 Strapi 备选

Strapi 适合需要更复杂内容 API、插件生态和开发扩展的项目。  
如果只是官网文案、图片、案例、联系方式、客户提交和 SEO，Directus 更轻。

## 7. 第四部分：域名

### 7.1 应该买什么域名

建议优先买 `.com`，其次 `.cn`。

品牌官网优先级：

```text
lescraftbeer.com
lescraftbeer.cn
lesbeer.com
lesbrew.com
lesnanchang.com
```

购买原则：

```text
短
好记
不带连字符
优先 .com
和品牌 LE'S CRAFT BEER 强相关
方便口头传播
```

### 7.2 推荐 5 个域名

需要到域名平台确认是否可注册：

```text
lescraftbeer.com
lescraftbeer.cn
lesbrew.com
lesbeer.cn
nanchangcraftbeer.com
```

国内购买平台：

```text
阿里云域名
腾讯云域名
西部数码
新网
```

国外购买平台：

```text
Namecheap
Cloudflare Registrar
GoDaddy
```

### 7.3 如何绑定

绑定到 Vercel：

```text
1. Vercel 项目后台打开 Settings
2. 进入 Domains
3. 添加 lescraftbeer.com 和 www.lescraftbeer.com
4. 按 Vercel 提示添加 DNS 记录
5. 等待自动签发 HTTPS
```

绑定到云服务器：

```text
1. 域名解析 A 记录到服务器 IP
2. Nginx server_name 填域名
3. 重载 Nginx
4. 使用 Certbot 申请 HTTPS
```

### 7.4 如何续费

建议：

```text
开启自动续费
一次购买 3-5 年
绑定企业邮箱作为域名管理邮箱
保管好域名平台账号和手机号
提前 30 天检查续费状态
```

### 7.5 如何迁移

从 Vercel 迁移到服务器：

```text
1. 在服务器部署网站
2. 测试服务器 IP 是否访问正常
3. 修改域名 DNS A 记录到服务器 IP
4. 等待解析生效
5. 在服务器申请 HTTPS
```

从服务器迁移到 Vercel：

```text
1. 上传代码到 GitHub
2. Vercel 导入项目
3. 部署成功后获取 Vercel 解析记录
4. 修改域名 DNS
5. 等待 HTTPS 自动生效
```

迁移注意：

```text
迁移前备份 out 目录
备份 Directus 数据库和 uploads
保持旧站至少 48 小时不要删除
迁移后检查首页、表单、地图、SEO、后台登录
```

## 8. 维护方法

### 8.1 直接改代码维护

适合小改动：

```text
assets/siteData.js
```

可修改：

```text
电话
微信
地址
营业时间
首页服务文案
案例
客户评价
团队介绍
企业文化
```

修改后：

```bash
npm run build
```

重新上传 `out` 目录。

### 8.2 后台维护

推荐维护路径：

```text
运营人员登录 Directus
修改文案、图片、案例、联系方式、SEO
官网读取 Directus 内容
```

当前代码是静态版。要接入 Directus，需要在下一阶段把 `assets/siteData.js` 改为从 Directus API 读取。

## 9. 备份方法

### 9.1 代码备份

推荐使用 GitHub：

```bash
git add .
git commit -m "Update website"
git push
```

### 9.2 静态网站备份

备份：

```text
website 源代码目录
out 构建目录
public/assets 图片目录
```

### 9.3 Directus 备份

如果使用 SQLite：

```bash
cd /www/directus
tar -czvf directus-backup-$(date +%F).tar.gz database uploads extensions docker-compose.yml
```

恢复：

```bash
cd /www/directus
tar -xzvf directus-backup-日期.tar.gz
docker compose up -d
```

### 9.4 服务器备份频率

```text
代码：每次修改后提交 Git
图片：每周备份
数据库：每天备份
服务器快照：每周一次
重大改版前：立即做一次完整快照
```

## 10. 最终交付清单

```text
官网代码：已完成
项目结构：已完成
本地启动命令：已提供
Vercel 免费部署方案：已提供
企业服务器部署方案：已提供
Nginx 配置：已提供
HTTPS 配置：已提供
后台管理方案：已提供，推荐 Directus
域名推荐：已提供
域名绑定：已提供
维护方法：已提供
备份方法：已提供
```
