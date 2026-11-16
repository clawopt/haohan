import type { Category, HistoryEvent } from './data'

// August 1937: the Battle of Shanghai expands, the Chinese government issues
// its self-defense declaration, the Red Army is reorganized, and North China
// fighting continues.
export const chinaAugustSources = {
  augCnChronology: { name: '人民网 · 抗战大事记·1937年', url: 'http://dangshi.people.com.cn/n/2015/0429/c85037-26926310.html' },
  augCnSelfDefense: { name: '中共中央党史和文献研究院 · 中国人民抗日战争历史知识问答（自卫抗战声明书）', url: 'https://www.dswxyjy.org.cn/n1/2020/0825/c433628-31836387.html' },
  augCnPact: { name: 'Wikipedia · Sino-Soviet Non-Aggression Pact', url: 'https://en.wikipedia.org/wiki/Sino-Soviet_Non-Aggression_Pact' },
  augCnAugust: { name: 'Wikipedia · August 1937', url: 'https://en.wikipedia.org/wiki/August_1937' },
  augCnEightRoute: { name: '人民网 · 抗日战争中的八路军总部', url: 'http://dangshi.people.com.cn/n/2015/0605/c85037-27109066.html' },
}

type SourceId = keyof typeof chinaAugustSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `aug37-cn-${id}`, year: 1937, month: 8, country: 'china', day,
    date: `1937年8月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaAugustEvents: HistoryEvent[] = [
  record('hongqiao-airport', 9, '军事', '虹桥机场事件', '上海 · 虹桥机场',
    '日本海军陆战队军官闯入虹桥机场，与中国保安队发生冲突，成为上海战事导火索之一。',
    '8月9日，日本海军陆战队两名军官驾车强行闯入上海虹桥机场，与中国保安队发生冲突，日方军官被打死。日本方面随即以此为借口向上海增兵、提出交涉。\n\n虹桥机场事件是上海战事爆发前的重要导火索，但上海战事的根本原因是日本扩大侵华战争的既定方针。事件经过与责任在中日双方记载中有差异；本条只记冲突与后续交涉，不把单方说法当作定论。',
    [], ['japan'], 'augCnChronology', {
      topicIds: ['full-resistance', 'shanghai-war'],
      evidenceNote: '人民网抗战大事记记8月9日虹桥机场事件；中日双方记载与交涉文件未逐条核对。',
    }),
  record('self-defense-declaration', 14, '政治', '国民政府发表《自卫抗战声明书》', '中国 · 南京',
    '国民政府在日军进攻上海后发表声明，宣布实行自卫、抵抗侵略。',
    '8月14日，国民政府在日军大举进攻上海后发表《自卫抗战声明书》，指出“中国为日本无止境之侵略所逼迫，兹已不得不实行自卫，抵抗暴力”。声明历数日本自九一八事变以来扩大侵华的行为，表明中国被迫抗战的立场。\n\n声明书是国民政府对外公开的抗战表态，不等于当天已对日宣战；国民政府对日宣战在1941年12月。声明书与淞沪会战、八路军改编等共同构成全面抗战初期的政治与军事节点。',
    ['chiang'], ['nanjing-government'], 'augCnSelfDefense', {
      topicIds: ['full-resistance', 'shanghai-war'],
      evidenceNote: '中央党史和文献研究院问答记8月14日声明书及原文引语；声明全文与国民政府外交档案未逐条核对。',
    }),
  record('bayi-four-air-battle', 14, '军事', '中国空军在杭州上空迎击日机', '浙江 · 杭州 · 笕桥',
    '中国空军在杭州笕桥上空与来袭日机交战，取得初步战果。',
    '8月14日，中国空军在杭州笕桥上空迎击来袭的日本海军航空队，双方爆发空战。中国飞行员驾驶战斗机与日机缠斗，取得击落日机的战果；这一天后来被称为“八一四空战”，成为中国空军抗战记忆的重要节点。\n\n空战战果在不同资料中有差异，日军损失数字须与日方记录对照；中国空军自身也有损失。空战胜利提振了抗战初期的士气，但不等于中国空军已经掌握制空权。本条只记空战与日期。',
    [], [], 'augCnAugust', {
      topicIds: ['full-resistance', 'shanghai-war'],
      evidenceNote: '1937年8月事件汇编记8月14日中国空军与日机在杭州上空交战；双方战果统计存在差异，未取单一数字。',
    }),
  record('sino-soviet-pact', 21, '外交', '中苏签订互不侵犯条约', '中国 · 南京',
    '中国与苏联签订互不侵犯条约，苏联承诺不以武力侵犯中国。',
    '8月21日，中国国民政府与苏联政府在南京签订《中苏互不侵犯条约》。条约规定双方不以武力互相侵犯，不参加针对对方的第三国同盟，并在对方遭到第三国侵略时保持中立。\n\n条约的签订使中国在全面抗战初期获得苏联的外交支持与后续军事援助，但条约本身不是军事同盟，苏联也未对日宣战。具体条款、换文与苏联援华物资须据条约文本与外交档案；本条只记签订。',
    ['chiang'], ['nanjing-government', 'ussr'], 'augCnPact', {
      topicIds: ['full-resistance'],
      evidenceNote: '中苏互不侵犯条约条目记8月21日签订；条约全文与苏联援华记录未逐条核对。',
    }),
  record('red-army-reorganization-order', 22, '政治', '国民政府军事委员会宣布红军主力改编为八路军', '中国 · 南京 / 陕北 · 延安',
    '国民政府军事委员会发布命令，宣布红军主力改编为国民革命军第八路军。',
    '8月22日，国民政府军事委员会正式发布命令，宣布红军主力改编为国民革命军第八路军。根据国共两党协议，中共中央军委于8月25日发布改编命令，将红军第一、第二、第四方面军及陕北红军等部改编为八路军，朱德任总指挥，彭德怀任副总指挥，叶剑英任参谋长。\n\n红军改编是第二次国共合作与抗日民族统一战线的重要成果，使红军取得合法番号并开赴华北抗日前线。改编命令与部队实际集中、开拔须分别理解；番号、编制与人事须据双方命令与档案。本条只记8月22日国民政府命令。',
    ['zhu', 'peng'], ['cpc-central', 'nanjing-government'], 'augCnEightRoute', {
      topicIds: ['full-resistance', 'united-front'],
      evidenceNote: '人民网八路军总部文章记8月22日国民政府军委会命令、8月25日中共中央军委改编命令；命令原文与编制表未逐条核对。',
    }),
  record('zhangjiakou-falls', 27, '军事', '张家口失守', '察哈尔 · 张家口',
    '日本关东军占领张家口，察哈尔省大部落入日军控制。',
    '8月27日，日本关东军占领张家口。此前日军在平津得手后继续向察哈尔推进，中国守军进行了抵抗，但未能阻止日军占领张家口。\n\n张家口失守使察哈尔省大部落入日军控制，也威胁到山西、绥远的侧翼。具体战斗经过、守军番号与撤退路线须据战史档案；本条只记失守日期与结果。',
    [], [], 'augCnAugust', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年8月事件汇编记8月27日关东军占领张家口；中国守军部署与战斗经过未逐条核对。',
    }),
  record('shanghai-south-station', 28, '社会', '上海南站遭轰炸，《中国娃娃》照片拍摄', '上海 · 南站',
    '日军轰炸上海南站，摄影师王小亭拍下哭泣婴儿的照片《中国娃娃》。',
    '8月28日，日军轰炸上海南站，大量平民伤亡。中国摄影师王小亭（H. S. Wong）在现场拍下一名满身鲜血的婴儿坐在废墟中哭泣的照片，后来以《中国娃娃》（Bloody Saturday）闻名，成为控诉日本侵略的经典影像。\n\n照片的拍摄与传播属于战争影像史的重要事件，不等于照片中的婴儿身份与后续命运已有唯一结论；不同研究对婴儿姓名与结局有不同说法。轰炸本身造成的伤亡须据当时报道与档案；本条只记轰炸与照片拍摄。',
    [], ['press-world'], 'augCnAugust', {
      topicIds: ['full-resistance', 'shanghai-war'],
      evidenceNote: '1937年8月事件汇编记8月28日王小亭拍摄《中国娃娃》；婴儿身份与后续命运存在不同说法，伤亡数字未逐条核对。',
    }),
]
