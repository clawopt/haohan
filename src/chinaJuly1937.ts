import type { Category, HistoryEvent } from './data'

// July 1937: after the Marco Polo Bridge Incident, the CCP issues its call to
// national resistance, submits the united-front declaration, and North China
// falls to the Japanese army.
export const chinaJulySources = {
  julCnLugou: { name: '中共中央党史和文献研究院 · 卢沟桥事变和全国抗战的开始', url: 'https://www.dswxyjy.org.cn/n/2014/0706/c244520-25244235.html' },
  julCnTongdian: { name: '中国共产党新闻网 · 国共两党第二次合作，抗日民族统一战线正式形成', url: 'https://cpc.people.com.cn/GB/64107/65708/65722/4445192.html' },
  julCnXuanyan: { name: '人民网 · 卢沟桥抗战', url: 'http://dangshi.people.com.cn/n/2015/0529/c85037-27077636.html' },
  julCnCpc: { name: '中国共产党新闻网 · 中国共产党大事记·1937年', url: 'https://cpc.people.com.cn/GB/64162/64164/4415986.html' },
  julCnNanyuan: { name: '人民网 · “七七事变”：中国全民族抗战的开端', url: 'http://dangshi.people.com.cn/n/2015/0820/c85037-27491598.html' },
  julCnJuly10: { name: 'Wikipedia · July 1937（7月10日蒋介石广播讲话）', url: 'https://en.wikipedia.org/wiki/July_1937' },
}

type SourceId = keyof typeof chinaJulySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `jul37-cn-${id}`, year: 1937, month: 7, country: 'china', day,
    date: `1937年7月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaJulyEvents: HistoryEvent[] = [
  record('cpc-telegram', 8, '政治', '中共中央发出《为日军进攻卢沟桥通电》', '陕北 · 延安',
    '中共中央号召全国同胞、军队与政府团结抗战，指出只有全民族抗战才是出路。',
    '7月8日，卢沟桥事变第二天，中共中央向全国各报馆、各团体、各军队、中国国民党、国民政府、军事委员会和全国同胞发出《为日军进攻卢沟桥通电》。通电指出“平津危急！华北危急！中华民族危急！只有全民族实行抗战，才是我们的出路！”\n\n通电是中共在全面抗战爆发后第一时间作出的公开政治动员，号召筑成民族统一战线的坚固长城。通电的发表不等于国共合作已经正式形成；两党谈判仍在继续，红军改编与边区政权问题尚未最后解决。',
    ['mao', 'zhangwentian'], ['cpc-central', 'press-world'], 'julCnTongdian', {
      topicIds: ['full-resistance', 'united-front'],
      evidenceNote: '中国共产党新闻网与人民网资料记7月8日通电及原文引语；通电全文未逐字校读，国共谈判后续另见相关记录。',
    }),
  record('chiang-radio-address', 10, '政治', '蒋介石发表广播讲话表明抵抗方针', '中国 · 南京',
    '蒋介石通过广播向全国表明国民党抵抗日本侵略的方针。',
    '7月10日，蒋介石发表广播讲话，向全国表明国民党对日本侵略的抵抗方针。讲话发生在卢沟桥事变后、庐山谈话前，是国民政府最高领导层公开表态的节点之一。\n\n广播讲话表明抵抗态度，不等于国民政府当天已经对日宣战或作出全面作战部署；具体政策与军事行动须据国民政府档案。本条只记讲话，不把7月17日庐山谈话的内容提前到7月10日。',
    ['chiang'], ['nanjing-government'], 'julCnJuly10', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年7月事件汇编记7月10日蒋介石广播讲话；讲话原文与国民政府档案未逐条核对，庐山谈话另条记录。',
    }),
  record('united-front-declaration', 15, '政治', '中共代表团向蒋介石提交《中共中央为公布国共合作宣言》', '江西 · 庐山',
    '周恩来等向蒋介石提交国共合作宣言，提出发动全民族抗战等三项主张。',
    '7月15日，中共代表团在庐山向蒋介石提交《中共中央为公布国共合作宣言》，提出发动全民族抗战、实行民权政治和改善人民生活三项政治主张，作为国共合作的总纲领。宣言还表示愿为彻底实现孙中山的三民主义而奋斗。\n\n宣言提交是国共合作谈判的关键一步，但国民党中央通讯社直到9月22日才发表该宣言，蒋介石次日发表谈话，第二次国共合作正式形成。本条只记7月15日提交，不把9月的公开发表提前。',
    ['zhouenlai', 'chiang'], ['cpc-central', 'nanjing-government'], 'julCnXuanyan', {
      topicIds: ['full-resistance', 'united-front'],
      references: ['julCnCpc'],
      evidenceNote: '人民网与中国共产党大事记记7月15日提交宣言及三项主张；宣言全文与提交过程未逐条核对，9月发表另见相关记录。',
    }),
  record('nanyuan-battle', 28, '军事', '南苑战斗，佟麟阁、赵登禹殉国', '北平 · 南苑',
    '日军总攻南苑，第二十九军副军长佟麟阁、第一三二师师长赵登禹阵亡。',
    '7月28日，日军以第二十师团为主力，配以重炮和飞机，向南苑发动总攻。第二十九军副军长佟麟阁、第一三二师师长赵登禹率部抵抗，先后在战斗中殉国，南苑失守。\n\n南苑战斗是平津抗战中最惨烈的一役，佟麟阁、赵登禹是抗战初期殉国的高级将领。南苑失守使北平失去重要屏障；具体兵力、伤亡与撤退过程须据第二十九军档案与战史研究。',
    [], [], 'julCnNanyuan', {
      topicIds: ['full-resistance'],
      references: ['julCnLugou'],
      evidenceNote: '人民网与新华网记7月28日南苑总攻、佟麟阁赵登禹殉国与南苑失守；战斗详报与伤亡数字未逐条核对。',
    }),
  record('beiping-falls', 29, '军事', '北平失守', '北平',
    '第二十九军撤离北平，日军占领这座古都。',
    '7月28日夜，宋哲元等奉蒋介石命令率第二十九军从北平撤退到保定。7月29日，北平失守，日军进入北平。\n\n北平失守是平津抗战的重要转折，标志着日本在华北的军事进攻取得阶段性结果。第二十九军撤退是为保存力量、避免全军覆没的军事决定，不等于中国放弃抵抗；具体撤退路线、留守安排与日军入城情况须据战史档案。',
    [], [], 'julCnLugou', {
      topicIds: ['full-resistance'],
      evidenceNote: '中央党史和文献研究院记7月28日夜宋哲元等奉命撤往保定、7月29日北平失守；撤退命令与日军入城记录未逐条核对。',
    }),
  record('tianjin-falls', 30, '军事', '天津失守', '天津',
    '日军占领天津，平津地区主要城市落入日军控制。',
    '7月30日，日军占领天津。此前日军在华北增兵，向南苑、北平发动总攻；第二十九军撤离后，天津的中国守军与日军交战失利，天津随之失守。\n\n天津失守使平津地区主要城市落入日军控制，但中国抗战并未停止；国民政府与中共的合作谈判继续进行，全面抗战在华北、上海等地展开。具体战斗经过、守军番号与伤亡须据战史档案。',
    [], [], 'julCnLugou', {
      topicIds: ['full-resistance'],
      evidenceNote: '中央党史和文献研究院记7月30日日军占领天津；天津战斗经过与守军部署未逐条核对。',
    }),
]
