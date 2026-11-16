import type { Category, HistoryEvent } from './data'

// August 1937 in the USSR: the Sino-Soviet pact, a trade extension with the
// United States, and a Soviet freighter sunk in the Mediterranean.
export const ussrAugustSources = {
  augSuAugust: { name: 'Wikipedia · August 1937', url: 'https://en.wikipedia.org/wiki/August_1937' },
  augSuPact: { name: 'Wikipedia · Sino-Soviet Non-Aggression Pact', url: 'https://en.wikipedia.org/wiki/Sino-Soviet_Non-Aggression_Pact' },
}

type SourceId = keyof typeof ussrAugustSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `aug37-su-${id}`, year: 1937, month: 8, country: 'ussr', day,
    date: `1937年8月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['ussr', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const ussrAugustEvents: HistoryEvent[] = [
  record('trade-pact-extension', 6, '经济', '苏美同意延长贸易协定一年', '苏联 · 莫斯科 / 美国 · 华盛顿',
    '苏联与美国同意将两国贸易协定延长一年。',
    '8月6日，苏联与美国同意将两国贸易协定延长一年。协定涉及两国贸易待遇与结算安排，是1930年代苏美有限经济合作的延续。\n\n延长协定是经济外交节点，不等于两国政治关系全面改善；具体贸易额、条款与后续谈判须据两国档案。本条只记延长。',
    'augSuAugust',
    '1937年8月事件汇编记8月6日苏美同意延长贸易协定一年；协定文本与贸易数据未逐条核对。',
    ['augSuAugust'], ['stalin']),
  record('sino-soviet-pact', 21, '外交', '苏联与中国签订互不侵犯条约', '中国 · 南京',
    '苏联与中国签订互不侵犯条约，承诺不以武力侵犯对方。',
    '8月21日，苏联与中国在南京签订《中苏互不侵犯条约》。条约规定双方不以武力互相侵犯，不参加针对对方的第三国同盟，并在对方遭到第三国侵略时保持中立。\n\n条约使中国在全面抗战初期获得苏联外交支持与后续军事援助，但苏联并未对日宣战，条约也不是军事同盟。具体条款、换文与苏联援华物资须据条约文本与外交档案；本条只记签订。',
    'augSuPact',
    '中苏互不侵犯条约条目记8月21日签订；条约全文与苏联援华记录未逐条核对。',
    ['augSuAugust'], ['stalin']),
  record('timiryazev-sunk', 30, '军事', '苏联货轮“季米里亚泽夫”号被击沉', '地中海 · 阿尔及利亚 · 德利斯附近',
    '苏联货轮“季米里亚泽夫”号在地中海被鱼雷击沉，30名船员获救。',
    '8月30日，苏联货轮“季米里亚泽夫”号在地中海阿尔及利亚德利斯附近被鱼雷击沉，30名船员被渔船救起。事件发生在西班牙内战期间“不明潜艇”袭击中立国商船的背景下。\n\n袭击方与鱼雷来源在资料中未完全明确，不能据此认定某一国蓄意攻击苏联船只；具体调查与外交交涉须据档案。本条只记击沉与救援。',
    'augSuAugust',
    '1937年8月事件汇编记8月30日“季米里亚泽夫”号被鱼雷击沉、30名船员获救；袭击方与调查记录未逐条核对。',
    ['augSuAugust'], ['stalin']),
]
