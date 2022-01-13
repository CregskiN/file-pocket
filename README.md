# file-pocket
文件口袋小程序端代码（已略去config文件）

> 作图工具 - processon.com
>
> markdown编辑器 - typora



## 一、前端概况

### 1. 小程序信息

> 小程序名称：文件口袋
>
> AppID: wxf3a3c091f4a6fa94
>
> 开发语言：TypeScript



### 2. 使用开源库

|    库名称     | author      | github URL                                  |     用途     |
| :-----------: | ----------- | ------------------------------------------- | :----------: |
|    moment     | moment      | https://github.com/moment/moment            | 统一时间格式 |
| fileicon.css  | picturepan2 | https://github.com/picturepan2/fileicon.css | 使用文件图标 |
| normalize.css | necolas     | https://github.com/necolas/normalize.css    |  css-reset   |



### 3. UI展示

<img src="https://www.qiniu.cregskin.com/202201131734938.jpeg" alt="首版UI展示" width="700" />  



## 二、文件流通情况示意图



<img src="https://www.qiniu.cregskin.com/202201131736263.png" alt="文件流通逻辑" width="700" />  



## 三、 角色与功能划分

<img src="https://www.qiniu.cregskin.com/202201131736192.png" alt="文件口袋-角色" width="700" />  



## 四、逻辑处理

### 1. 登陆逻辑

<img src="https://www.qiniu.cregskin.com/202201131736183.png" alt="登陆逻辑" width="700" />  


| 页面            |                       场景                       | 包含逻辑                                 |
| --------------- | :----------------------------------------------: | ---------------------------------------- |
| 官方口袋（tab） |                  直接打开小程序                  | 流程一、二，点击“退出口袋”时弹出授权弹窗 |
| 口袋列表（tab） |                  直接打开小程序                  | 流程一、二，以及对游客弹出授权弹窗       |
| 个人页面（tab） |                  直接打开小程序                  | 流程一、二，用户使用功能时弹出授权弹窗   |
| 文件分享页面    |         新用户（游客）点击“文件分享卡片”         | 流程一、二，以及对游客弹出授权弹窗       |
| 口袋详情页面    | 新用户（游客）点击“邀请加入卡片”进入“非官方口袋” | 流程一、二，以及对游客弹出授权弹窗       |
|                 |  新用户（游客）点击“邀请加入卡片”进入“官方口袋”  | 流程一、二，用户使用功能时弹出授权弹窗   |



### 2. 口袋详情页展示逻辑

<img src="https://www.qiniu.cregskin.com/202201131737148.png" alt="进入口袋详情" width="700" />  

### 3. 懒加载逻辑

<img src="https://www.qiniu.cregskin.com/202201131737848.png" alt="懒加载逻辑" width="700" />  


|      懒加载使用场景       |
| :-----------------------: |
|       口袋成员页面        |
| 官方口袋（tab）页搜索结果 |
|   口袋详情页文件懒加载    |
|  我的收藏页面文件懒加载   |




