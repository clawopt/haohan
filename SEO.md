# haohan.sotoolai.com 搜索与 AI 搜索优化

已完成源码改造与本地生产构建。正式地址统一使用 `https://haohan.sotoolai.com`。本次没有发布到托管平台，也没有替站点提交 Search Console 或 Bing Webmaster Tools。

## 改造结果

| 项目 | 改造前的检查结果 | 本地生产构建 |
| --- | --- | --- |
| 首页原始 HTML | 应用根节点为空，内容主要依赖 JavaScript | 直接输出1937年年度概述与具体事件链接，再恢复 React 交互 |
| 独立档案 | 事件在弹窗展示，人物链接是页面内片段 | 534 个事件页面、364 个人物页面 |
| 阅读目录 | 主要依赖筛选和弹窗 | 按年份、月份、日期、国家与专题提供真实链接 |
| 页面元信息 | 缺少独立页面 canonical | 每个页面有独立标题、摘要、canonical、Open Graph 和 Twitter 摘要 |
| 结构化数据 | 缺少对应实体描述 | WebSite、WebPage / CollectionPage / ProfilePage、Article、Person、ItemList、BreadcrumbList |
| 爬虫入口 | robots.txt、sitemap.xml 请求返回首页 HTML | 真实文本 robots.txt 与 XML 站点地图 |
| 不存在的页面 | 全站回退可能产生 soft 404 | 本地生产预览返回 HTTP 404，提供带 noindex 的 404.html |

构建输出包含 **1,080 个可索引页面**，其中首页 1 个、其余档案和目录 1,079 个；另有 1 个不索引的错误页面。静态档案页不加载 React 应用脚本，正文、人物、来源与阅读导航都可直接抓取。

## 内容与引用方式

- 年度大纲中的具体事件、详录事件标题和人物姓名使用真正的 `a[href]`。普通点击继续打开原弹窗，另开标签页时可进入独立档案；年度卡片和底部探索入口也提供可直接访问的详录链接。
- 年度卡片标题与正文独立概括背景、发展和阶段结果，不再拼接具体事件的标题与摘要。170组年度综述覆盖27个已收录年份，34组专题综述限定于筛选后的活动；年初样本、古代约年和世纪级记录保留范围与精度。首页预渲染直接输出这些综述。
- 档案页提供完整正文、原始纪年、地点、人物入口、专题及对应史料；人物生平仍由独立人物资料生成，不读取事件列表拼接人生。
- 日期有争议、原件尚未校读、单一来源和生卒未详等说明保留。古代条目用于交互排序的月份不被当作已知历史月份生成档案。
- 日级目录只把定日和跨日记录计入当天。约日、待核记录另列并说明限制；月级记录不当作当天发生的事件。
- Article 标记描述档案文章；历史日期放在正文与 `temporalCoverage`，没有伪造网页 `datePublished`、`dateModified`，也没有把历史事件标为可报名的现代活动。
- 人物 JSON-LD 不从模糊生卒字符串推导出生或去世日期；来源链接不强行标成身份已验证的 `sameAs`。
- 新增独立的 `/about/` 与 `/sources/`，说明范围、编写原则、核验层级和纠错所需信息。
- 为西安事变补充有明确出处的1936年12月12日起始节点，使专题能连接1936年发生与1937年善后。标签关联年份由实际事件标注计算；选定后高亮相关年份，禁用其余年份，清除标签后恢复。没有按正文中的背景年份制造虚构日期。

`llms.txt` 和 `llms-full.txt` 是附加导航与文本镜像，方便采用此约定的工具读取。它们不是 Google 或 ChatGPT 收录的必要条件，不提供排名或引用保证。EdgeOne 配置让这些文本可抓取，并通过 HTTP `X-Robots-Tag: noindex` 避免全文镜像成为搜索结果中的重复页面。

robots.txt 当前允许公开内容抓取，包括 Googlebot、Bingbot 和 OAI-SearchBot。GPTBot 的训练用途与 OAI-SearchBot 的搜索用途不同；本次没有单独制定训练爬虫限制。

## 构建与部署

```bash
npm ci
npm run build
npm run preview
```

构建目录为 `dist`。不要只上传 `index.html` 和 `assets`；事件、人物、目录、CSS、robots 和 sitemap 必须一起发布。`npm run export:demo` 会重新构建并生成 `浩汉-demo.html`；离线文件保留弹窗与典藏，独立档案入口指向正式站点。

根目录的 `edgeone.json` 设置构建命令、输出目录、带内容指纹资源的缓存、robots/sitemap MIME 类型和少量永久重定向。该配置没有添加全站回退至首页的规则。托管平台如仍使用旧 SPA 框架预设或 catch-all 配置，需调整为静态目录服务，保证：

1. `/events/<id>/` 和 `/people/<id>/` 直接返回对应目录的 `index.html`。
2. 中文 URL 经正常解码后读取中文目录名；上传时不要再次百分号编码文件名。
3. 不存在的路径保持 HTTP **404**；若显示 `404.html`，也必须保持 404 状态，不能通过 200 重写实现。
4. HTTPS 为主地址，HTTP 重定向至 HTTPS；额外绑定域名应永久重定向到正式域名。
5. robots.txt 为 `text/plain`、sitemap.xml 为 XML，不被旧首页回退或缓存覆盖。

`vite.config.ts` 的 `appType: 'mpa'` 只控制本地服务行为，不能代替托管平台配置。EdgeOne 的线上路由、响应头、重定向与缓存仍需在部署后实际检查。

更换域名时统一修改 `src/site.ts`，并同步修改离线导出脚本中的正式域名。

## 已完成的验证

- `npm run build`：TypeScript 与 Vite 构建通过。
- 遍历全部 **1,080 个 sitemap URL**，检查生成文件、唯一标题、单个 H1、description、canonical、JSON-LD 与目录数量一致。
- 检查 **27,149 个内部链接**，目标文件全部存在；包括使用中文事件标题的 URL。
- Chrome 禁用 JavaScript 时，首页年度概述、事件全文、人物生平与逐日档案可读。
- 年度大纲覆盖27个已收录年份，默认1937年共49张概述卡片。分类探索进入全年详录，底部详细探索进入1月，年份尺仍支持月日下钻，下钻面板可切换年度大纲与全年记录；当前专题在这些导航中保留。
- 全部55个标签的实际关联年份、高亮、禁用、自动聚焦与切换保留已验证。检查了单年份与多年份、鼠标、键盘、前后按钮、时间漫游、清除恢复、移动端、深链接及离线版本。滇缅匹配已排除戏剧角色“皮缅”的误关联，相应错误专题页不再生成。
- 桌面 1440px、手机 390px 和 320px 检查通过：预渲染恢复、已存典藏恢复、事件弹窗、人物弹窗、关闭行为、减少动效与页面宽度。
- 事件另开标签页、`/?event=<id>`、`/?person=<id>`、离线单文件交互通过。
- 新启动的生产预览服务验证 robots/sitemap 的类型，以及随机不存在路径和不存在事件地址的 HTTP 404。

浏览器验证刻意阻断外部字体与氛围图片，确认网络不可用时核心阅读和交互仍能工作。当前交互首页的 JavaScript 仍包含较大的历史资料集；独立档案页无需下载该应用脚本。线上 Core Web Vitals、真实爬虫收录和搜索曝光尚未测量。

## 发布后的搜索平台工作

1. 在 Google Search Console 与 Bing Webmaster Tools 验证站点所有权，并提交 `https://haohan.sotoolai.com/sitemap.xml`。
2. 抽查首页、一个事件、一个人物及一个月份页面的 URL 检查结果，确认实际获取的 HTML、canonical 与索引状态。
3. 检查 CDN/WAF 没有对合法搜索爬虫返回验证码、403 或错误页面。
4. 持续补充有来源的内容，修改结论时保留证据与限制；根据索引覆盖、查询词和阅读行为调整目录与正文。

这些动作提升可发现、可读取与可引用的基础条件；是否收录、排名和被 AI 答案引用由各平台决定。

## 官方依据

- [Google：AI 搜索功能与网站](https://developers.google.cn/search/docs/appearance/ai-features?hl=zh-cn)：AI 搜索遵循既有 SEO 基础，无需特殊 AI 文件或专用 schema。
- [Google：JavaScript SEO 基础](https://developers.google.cn/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=zh-cn)：可抓取链接、可读取内容、独立地址及正确状态码。
- [OpenAI：Publishers and Developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)：OAI-SearchBot 与 GPTBot 的不同用途。
- [EdgeOne Pages：edgeone.json](https://edgeone.cloud.tencent.com/pages/document/162936771610066944)：构建、输出目录、headers、redirects 与 caches 配置。
