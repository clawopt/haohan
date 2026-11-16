import type { Category, HistoryEvent } from './data'

// August 1937 in the United States: marijuana taxation, the National Cancer
// Institute, Hugo Black's confirmation, evacuation of Americans from China,
// and Joe Louis's title defense.
export const usaAugustSources = {
  augUsAugust: { name: 'Wikipedia · August 1937', url: 'https://en.wikipedia.org/wiki/August_1937' },
  augUsMarihuana: { name: 'Wikipedia · Marihuana Tax Act of 1937', url: 'https://en.wikipedia.org/wiki/Marihuana_Tax_Act_of_1937' },
  augUsNCI: { name: '美国国家癌症研究所 · 历史', url: 'https://www.cancer.gov/about-nci/overview/history' },
  augUsWharton: { name: 'Wikipedia · Edith Wharton', url: 'https://en.wikipedia.org/wiki/Edith_Wharton' },
  augUsBlack: { name: 'Wikipedia · Hugo Black', url: 'https://en.wikipedia.org/wiki/Hugo_Black' },
  augUsLouis: { name: 'Wikipedia · Joe Louis', url: 'https://en.wikipedia.org/wiki/Joe_Louis' },
}

type SourceId = keyof typeof usaAugustSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `aug37-us-${id}`, year: 1937, month: 8, country: 'usa', day,
    date: `1937年8月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['usa', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const usaAugustEvents: HistoryEvent[] = [
  record('marihuana-tax', 2, '政治', '美国颁布《大麻税法》', '美国 · 华盛顿',
    '美国通过《大麻税法》，以税收和登记手段限制大麻流通。',
    '8月2日，美国颁布《大麻税法》（Marihuana Tax Act），对生产、销售与持有大麻征收特别税，并要求相关从业者登记。该法使大麻在联邦层面实际上被禁止，直到1970年《受控物质法》取代。\n\n法案是联邦毒品管制政策的节点，不等于所有州当天开始统一执法；具体税率、登记与司法争议须据美国国会与财政部档案。本条只记颁布。',
    'augUsMarihuana',
    '《大麻税法》条目与1937年8月事件汇编记8月2日颁布；法案全文与执法记录未逐条核对。',
    ['augUsAugust'], []),
  record('national-cancer-institute', 6, '社会', '美国国家癌症研究所成立', '美国 · 马里兰州贝塞斯达',
    '美国设立国家癌症研究所，推动癌症研究与治疗。',
    '8月6日，美国国家癌症研究所（National Cancer Institute）成立。它是美国联邦政府负责癌症研究的机构，后来成为美国国立卫生研究院的重要组成部分。\n\n机构成立是公共卫生与医学研究的节点，不等于癌症治疗当天取得突破；具体研究项目、预算与成果须据NCI档案。本条只记成立。',
    'augUsNCI',
    'NCI历史与1937年8月事件汇编记8月6日成立；机构预算与早期研究未逐条核对。',
    ['augUsAugust'], []),
  record('edith-wharton-death', 11, '文化', '作家伊迪丝·华顿去世', '法国 · 圣布里斯苏福雷',
    '美国作家伊迪丝·华顿去世，享年75岁。',
    '8月11日，美国作家伊迪丝·华顿在法国去世，享年75岁。她以《纯真年代》《欢乐之家》等小说闻名，描写纽约上流社会的婚姻、阶级与道德困境，是20世纪初美国文学的重要人物。\n\n华顿的去世是文学史节点，不等于其作品当天停止传播；葬礼、遗产与文学评价须据传记与档案。本条只记去世。',
    'augUsWharton',
    '华顿条目与1937年8月事件汇编记8月11日去世、享年75岁；病史与葬礼记录未逐条核对。',
    ['augUsAugust'], []),
  record('hugo-black-confirmed', 17, '政治', '雨果·布莱克获参议院确认为最高法院大法官', '美国 · 华盛顿',
    '参议院以63票对16票确认雨果·布莱克出任最高法院大法官。',
    '8月17日，美国参议院以63票对16票确认雨果·布莱克出任最高法院大法官。布莱克曾被曝出与三K党有过关联，提名引发争议，但他此后在最高法院任职三十余年，成为民权与言论自由判例的重要人物。\n\n确认投票是司法任命节点，不等于争议当天消失；布莱克的司法立场与历史评价须据判例与传记。本条只记确认表决。',
    'augUsBlack',
    'Hugo Black条目与1937年8月事件汇编记8月17日63比16确认；参议院表决记录与提名听证未逐条核对。',
    ['augUsAugust'], ['us-supreme-court']),
  record('china-evacuation-order', 18, '外交', '美国下令在华公民撤离', '美国 · 华盛顿',
    '美国政府要求在华约1.26万名美国公民撤离中国。',
    '8月18日，美国政府下令在华约12600名美国公民撤离中国。此前日军进攻上海、轰炸南京等地，外国侨民安全受到威胁；美国国务院要求侨民尽快离开战区。\n\n撤离令是领事保护与外交安全措施，不等于美国当天改变对中日战争的中立政策；美国仍维持1937年中立法。具体撤离人数、路线与后续政策须据国务院档案。本条只记命令。',
    'augUsAugust',
    '1937年8月事件汇编记8月18日美国下令约1.26万在华公民撤离；国务院档案与撤离统计未逐条核对。',
    ['augUsAugust'], ['roosevelt']),
  record('louis-farr', 30, '文化', '乔·路易斯卫冕重量级拳王', '美国 · 纽约 · 扬基体育场',
    '乔·路易斯与汤米·法尔打满十五回合，以点数卫冕世界重量级冠军。',
    '8月30日，乔·路易斯在纽约扬基体育场与英国拳手汤米·法尔打满十五回合，以点数判定卫冕世界重量级拳王。法尔是当时少数能与路易斯打满全场的对手，比赛吸引大量观众。\n\n卫冕是路易斯拳击生涯的节点，不等于他已经完成全部卫冕；比赛纪录、裁判评分与观众人数须据拳击档案。本条只记比赛结果。',
    'augUsLouis',
    '乔·路易斯条目与1937年8月事件汇编记8月30日十五回合点数战胜法尔；比赛记录与评分卡未逐条核对。',
    ['augUsAugust'], []),
]
