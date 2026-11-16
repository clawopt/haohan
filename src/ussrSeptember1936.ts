import type { Category, HistoryEvent } from './data'

// September 1936 in the USSR: Orlov arrives in Spain to oversee the gold
// transfer, and Yezhov replaces Yagoda at the NKVD.
export const ussrSeptember1936Sources = {
  septSuDec: { name: 'Wikipedia · September 1936', url: 'https://en.wikipedia.org/wiki/September_1936' },
  septSuGold: { name: 'Wikipedia · Moscow gold', url: 'https://en.wikipedia.org/wiki/Moscow_gold' },
  septSuYezhov: { name: 'Wikipedia · Nikolai Yezhov', url: 'https://en.wikipedia.org/wiki/Nikolai_Yezhov' },
}

type SourceId = keyof typeof ussrSeptember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `sep36-su-${id}`, year: 1936, month: 9, country: 'ussr', day,
    date: `1936年9月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['ussr', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const ussrSeptember1936Events: HistoryEvent[] = [
  record('orlov-spain', 9, '经济', '苏联内务部官员奥尔洛夫抵达西班牙', '西班牙 · 马德里',
    '苏联内务部官员奥尔洛夫抵达西班牙，监督西班牙国库资金向莫斯科的转运。',
    '9月9日，苏联内务部官员亚历山大·奥尔洛夫抵达西班牙，负责监督西班牙共和国国库资金向莫斯科的转运。此后西班牙黄金被运往苏联，用于支付苏联的武器与援助，史称“莫斯科黄金”。\n\n黄金转运是苏联介入西班牙内战的重要财政环节，具体数量、运输与用途在不同研究中存在差异；本条只记奥尔洛夫抵达与监督职责。',
    'septSuGold',
    '“莫斯科黄金”资料与1936年9月事件汇编记9月9日奥尔洛夫抵达西班牙、监督国库资金转运；黄金数量与运输细节未逐条核对。',
    ['septSuDec'], ['stalin']),
  record('yezhov-nkvd', 26, '政治', '叶若夫出任苏联内务人民委员部首长', '苏联 · 莫斯科',
    '斯大林任命尼古拉·叶若夫接替亚戈达，领导内务人民委员部。',
    '9月26日，斯大林任命尼古拉·叶若夫为内务人民委员部（NKVD）首长，接替亨里希·亚戈达。叶若夫上任后，大清洗进一步扩大，1936年至1938年的政治镇压达到高峰。\n\n任命是苏联政治镇压体系的关键节点，不等于大清洗当天开始；此前的审判与镇压已经进行，叶若夫时期规模显著扩大。具体任命文件、机构调整与受害者统计须据苏联档案与研究。本条只记任命。',
    'septSuYezhov',
    '叶若夫条目与1936年9月事件汇编记9月26日斯大林任命叶若夫为NKVD首长、接替亚戈达；任命文件与受害者统计未逐条核对。',
    ['septSuDec'], ['stalin']),
]
