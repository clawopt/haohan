import type { Category, HistoryEvent } from './data'

// July 1937 in the United States: Earhart vanishes, Spam goes on sale, Fox
// loses its silent-film archive, and George Gershwin dies.
export const usaJulySources = {
  julUsJuly: { name: 'Wikipedia · July 1937', url: 'https://en.wikipedia.org/wiki/July_1937' },
  julUsEarhart: { name: 'Wikipedia · Amelia Earhart', url: 'https://en.wikipedia.org/wiki/Amelia_Earhart' },
  julUsSpam: { name: 'Wikipedia · Spam (food)', url: 'https://en.wikipedia.org/wiki/Spam_(food)' },
  julUsAllStar: { name: 'Wikipedia · 1937 Major League Baseball All-Star Game', url: 'https://en.wikipedia.org/wiki/1937_Major_League_Baseball_All-Star_Game' },
  julUsFox: { name: 'Wikipedia · 1937 Fox vault fire', url: 'https://en.wikipedia.org/wiki/1937_Fox_vault_fire' },
  julUsGershwin: { name: 'Wikipedia · George Gershwin', url: 'https://en.wikipedia.org/wiki/George_Gershwin' },
}

type SourceId = keyof typeof usaJulySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `jul37-us-${id}`, year: 1937, month: 7, country: 'usa', day,
    date: `1937年7月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['usa', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const usaJulyEvents: HistoryEvent[] = [
  record('earhart-lost', 2, '文化', '埃尔哈特在太平洋上空失踪', '太平洋 · 豪兰岛附近',
    '阿梅莉亚·埃尔哈特与领航员努南在环球飞行途中失踪。',
    '7月2日，阿梅莉亚·埃尔哈特与领航员弗雷德·努南在环球飞行途中，于太平洋豪兰岛附近失去联络，随后失踪。美国海军与海岸警卫队展开大规模搜救，未找到飞机与机组。\n\n埃尔哈特失踪是航空史与公众记忆中的重大事件，具体失事原因至今没有定论；搜救范围、最后通讯与各种推测须分别理解，本条不采用单一阴谋论解释。',
    'julUsEarhart',
    '埃尔哈特条目记7月2日失踪与搜救；搜救报告与最后通讯记录未逐条核对，失事原因不作定论。',
    ['julUsJuly'], []),
  record('spam-launch', 5, '经济', '荷美尔公司开始销售午餐肉罐头 Spam', '美国 · 明尼苏达州奥斯汀',
    '荷美尔公司推出罐装肉制品 Spam，后来成为战时重要食品。',
    '7月5日，荷美尔食品公司开始销售罐装肉制品 Spam。这种由猪肉、火腿与香料制成的罐头食品价格低廉、保存期长，后来在第二次世界大战中成为美军与盟国的重要补给品。\n\nSpam上市是食品工业与消费文化节点，不等于当天已成为大众日常食品；其配方、销售与战争期间的使用须据企业史与军方记录。本条只记开始销售。',
    'julUsSpam',
    'Spam条目与1937年7月事件汇编记7月5日开始销售；配方与企业销售记录未逐条核对。',
    ['julUsJuly'], []),
  record('all-star-game', 7, '文化', '第五届美国职棒全明星赛举行', '美国 · 华盛顿 · 格里菲斯体育场',
    '美国联盟以8比3击败国家联盟，第五届职棒全明星赛落幕。',
    '7月7日，第五届美国职棒大联盟全明星赛在华盛顿格里菲斯体育场举行，美国联盟以8比3击败国家联盟。全明星赛是1933年开始的年度表演赛，逐渐成为美国职棒的重要文化活动。\n\n比赛结果是体育文化节点，不等于当时职棒已经解决种族隔离；黑人球员仍被排除在大联盟之外。具体球员表现与观众人数须据职棒档案。本条只记比赛结果。',
    'julUsAllStar',
    '1937年全明星赛条目与7月事件汇编记7月7日美国联盟8比3获胜；比赛记录与观众人数未逐条核对。',
    ['julUsJuly'], []),
  record('fox-vault-fire', 9, '文化', '福克斯胶片库火灾烧毁大量默片', '美国 · 新泽西州小费里',
    '福克斯电影公司胶片库发生火灾，1932年前的多数默片被毁。',
    '7月9日，福克斯电影公司位于新泽西州小费里的胶片储存设施发生火灾，烧毁该公司1932年前生产的大部分无声电影底片与拷贝。火灾造成不可恢复的电影史料损失。\n\n火灾是电影保存史上的重大事件，推动业界重视胶片档案的安全储存；具体损失片目、火灾原因与保险赔偿须据福克斯档案与电影保存研究。本条只记火灾与损失范围。',
    'julUsFox',
    '1937年福克斯胶片库火灾条目记7月9日与1932年前默片大部分被毁；损失片目与调查记录未逐条核对。',
    ['julUsJuly'], []),
  record('gershwin-death', 11, '文化', '作曲家乔治·格什温去世', '美国 · 加州洛杉矶',
    '美国作曲家乔治·格什温因脑瘤去世，年仅38岁。',
    '7月11日，美国作曲家乔治·格什温因脑瘤在洛杉矶去世，年仅38岁。他创作了《蓝色狂想曲》《一个美国人在巴黎》《波吉与贝丝》以及大量百老汇与电影歌曲，是20世纪美国音乐的重要人物。\n\n格什温的去世是美国音乐史的损失，不等于其作品当天停止演出；葬礼、纪念活动与作品评价须据音乐史资料。本条只记去世。',
    'julUsGershwin',
    '格什温条目与1937年7月事件汇编记7月11日去世、病因脑瘤；病历与葬礼记录未逐条核对。',
    ['julUsJuly'], []),
]
