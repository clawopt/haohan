import type { Category, HistoryEvent } from './data'

// August 1937 in Japan: mobilization for the Shanghai campaign, the Shanghai
// Expeditionary Army, and the founding of Canon.
export const japanAugustSources = {
  augJpAugust: { name: 'Wikipedia · August 1937', url: 'https://en.wikipedia.org/wiki/August_1937' },
  augJpCanon: { name: 'Wikipedia · Canon Inc.', url: 'https://en.wikipedia.org/wiki/Canon_Inc.' },
  augJpShanghaiArmy: { name: 'Wikipedia · Shanghai Expeditionary Army', url: 'https://en.wikipedia.org/wiki/Shanghai_Expeditionary_Army' },
}

type SourceId = keyof typeof japanAugustSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `aug37-jp-${id}`, year: 1937, month: 8, country: 'japan', day,
    date: `1937年8月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['japan', ...actors])], source, topicIds: [],
    evidenceNote: '日期指本条所记动员、编成或创业的发生日；未由资料支持的政策结果不作补写。',
    ...extra,
  }
}

export const japanAugustEvents: HistoryEvent[] = [
  record('canon-founded', 10, '经济', '精机光学研究所成立，为佳能前身', '日本 · 东京',
    '精机光学研究所成立，后来发展为佳能公司。',
    '8月10日，精机光学研究所在东京成立，是佳能公司的前身。该机构最初从事相机研究与制造，后来以“Canon”品牌生产相机与办公设备，成为日本精密光学工业的代表企业之一。\n\n创业是日本工业史节点，不等于佳能品牌当天已经确立或产品已经上市；公司名称、产品与股权变化须据企业史。本条只记研究所成立。',
    [], 'augJpCanon', {
      references: ['augJpAugust'],
      evidenceNote: '佳能企业条目与1937年8月事件汇编记8月10日精机光学研究所成立；创业资金与早期产品未逐条核对。',
    }),
  record('shanghai-expeditionary-army', 15, '军事', '日本编成上海派遣军', '日本 · 东京',
    '日本组建上海派遣军，准备投入上海作战。',
    '8月15日，日本组建上海派遣军，由松井石根任司令官，准备投入上海作战。此前日军已在上海与中国军队交战，上海派遣军的编成使日本把上海方向的冲突升级为大规模战役。\n\n上海派遣军编成是淞沪会战扩大的关键节点，不等于当天已完成登陆或作战部署；部队编成、登陆时间与作战经过须据日本陆军档案。本条只记编成。',
    [], 'augJpShanghaiArmy', {
      topicIds: ['full-resistance', 'shanghai-war'],
      evidenceNote: '上海派遣军条目与1937年8月事件汇编记8月15日编成、松井石根任司令官；编成命令与登陆记录未逐条核对。',
    }),
  record('general-mobilization', 16, '军事', '日本下令总动员', '日本 · 东京',
    '日本下令军事总动员，扩大对华战争动员范围。',
    '8月16日，日本下令军事总动员，扩大对华战争的动员范围。此前日本已向华北增兵并编成上海派遣军，总动员令使日本进入更大规模的战时体制。\n\n总动员是日本战争升级的节点，不等于所有动员措施当天完成；具体动员范围、兵力与军工生产须据日本陆军与内阁档案。本条只记命令。',
    ['hirohito'], 'augJpAugust', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年8月事件汇编记8月16日日本下令军事总动员；动员令原文与实施记录未逐条核对。',
    }),
]
