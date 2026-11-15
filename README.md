# 浩汉

以中国历史为主线、同期世界为对照的交互式历史时间轴网站。

- **年度大事记**：每年只记关键事件，按政治、军事、经济、文化、社会、外交、战役七类对读各国
- **时间轴**：年份尺支持年度大事记、全年记录（逐月浏览）与月日下钻
- **专题筛选**：按事件标签过滤，并高亮、聚焦相关年份
- **独立档案**：事件、人物和目录拥有可直接访问的静态页面
- **离线演示**：根目录 `浩汉-demo.html` 可直接打开，无需安装依赖

## 本地运行

```bash
npm install
npm run dev
```

`npm run build` 生成生产版本，`npm run preview` 预览构建结果，`npm run export:demo` 重新构建并更新离线单文件。

## 技术栈

React + TypeScript + Vite。构建时预渲染首页与全部档案页，生成 canonical、JSON-LD、`robots.txt` 和 `sitemap.xml`。

## 主要代码

- `src/data.ts`：事件、人物、来源与年代数据
- `src/ChronicleScene.tsx`：年份尺、各国事件轴与月日下钻
- `src/AnnualOverview.tsx`、`src/yearOverview.ts`、`src/annualNarratives.ts`：年度大事记与综述
- `src/topics.ts`、`src/topicTimeline.ts`、`src/TopicPicker.tsx`：专题标签及年份联动
- `src/seo.tsx`、`src/site.ts`、`scripts/build-seo.mjs`：静态档案、站点信息与站点地图
- `src/styles.css`：界面样式与响应式布局

## 部署

正式域名为 `https://haohan.sotoolai.com`，构建产物位于 `dist`，EdgeOne 配置见 `edgeone.json`。发布时上传整个目录，并确保不存在的路径返回 HTTP 404。搜索与部署细节见 [SEO.md](./SEO.md)。

## 说明

近代日期采用公历，远古保留约年与世纪精度。史料来源、依据强度与日期分歧在各事件详情及“史料与纪年说明”中标注。Demo 无后端，典藏保存在当前浏览器的 localStorage。
