import type { Category, HistoryEvent } from './data'

// October 1937 in the United States: the Quarantine Speech, Hugo Black's radio
// address, the Yankees, an air crash, and the stock market slide.
export const usaOctoberSources = {
  octUsOct: { name: 'Wikipedia · October 1937', url: 'https://en.wikipedia.org/wiki/October_1937' },
}

type SourceId = keyof typeof usaOctoberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `oct37-us-${id}`, year: 1937, month: 10, country: 'usa', day,
    date: `1937年10月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['usa', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const usaOctoberEvents: HistoryEvent[] = [
  record('hugo-black-radio', 1, '政治', '布莱克发表广播讲话承认曾加入三K党', '美国 · 华盛顿',
    '最高法院大法官布莱克承认曾加入三K党，但表示已退出并谴责该组织。',
    '10月1日，美国最高法院大法官雨果·布莱克发表广播讲话，承认自己曾加入三K党，但表示早已退出且未再加入。他谴责三K党的行为，并强调自己在参议院的投票记录表明他支持所有美国人的公民、经济与宗教权利。\n\n讲话是对提名争议的公开回应，不等于争议当天消失；布莱克此后在最高法院任职三十余年，其司法立场与历史评价须据判例与传记。本条只记讲话。',
    'octUsOct',
    '1937年10月事件汇编记10月1日布莱克广播讲话与承认加入三K党；讲话全文与反应未逐字核对。',
    ['octUsOct'], ['us-supreme-court']),
  record('quarantine-speech', 5, '外交', '罗斯福发表“隔离侵略者”演说', '美国 · 芝加哥',
    '罗斯福把战争比作“传染病”，呼吁国际社会“隔离”侵略国家。',
    '10月5日，罗斯福总统在芝加哥发表“隔离演说”（Quarantine Speech），把战争比作“传染病”，呼吁国际社会对侵略国家实行“隔离”。演说虽未点名日本、意大利或德国，但被普遍理解为对法西斯侵略的批评。\n\n演说反映罗斯福对国际局势的担忧，不等于美国当天放弃中立或准备参战；国内孤立主义反应强烈，罗斯福随后淡化具体措施。具体演说原文与后续政策须据罗斯福图书馆档案。本条只记演说。',
    'octUsOct',
    '1937年10月事件汇编记10月5日芝加哥“隔离演说”；演说全文未逐字校读，后续政策未展开。',
    ['octUsOct'], ['roosevelt']),
  record('womans-day', 7, '文化', '《妇女家庭杂志》Woman’s Day 创刊', '美国',
    '美国杂志 Woman’s Day 首次出版。',
    '10月7日，美国杂志《Woman’s Day》首次出版。杂志面向家庭妇女，内容涵盖家政、食品、健康与生活方式，后来成为美国发行量较大的女性杂志之一。\n\n创刊是美国出版与消费文化节点，不等于杂志当天形成全国影响；首印数量、定位与后续发展须据出版档案。本条只记创刊。',
    'octUsOct',
    '1937年10月事件汇编记10月7日Woman’s Day首次出版；出版档案与首印记录未逐条核对。',
    ['octUsOct'], []),
  record('yankees-world-series', 10, '文化', '纽约扬基队赢得世界大赛', '美国 · 纽约',
    '纽约扬基队以四胜一负击败纽约巨人队，连续第二年赢得世界大赛。',
    '10月10日，纽约扬基队在1937年世界大赛中以四胜一负击败纽约巨人队，连续第二年夺冠。扬基队在美联赛季中表现强势，乔·迪马乔等球员是球队核心。\n\n世界大赛冠军是美国职棒文化节点，不等于当时职棒已经解决种族隔离；黑人球员仍被排除在大联盟之外。具体比赛记录、球员数据与观众人数须据职棒档案。本条只记夺冠。',
    'octUsOct',
    '1937年世界大赛条目与10月事件汇编记10月10日扬基队四胜一负夺冠；比赛记录与球员数据未逐条核对。',
    ['octUsOct'], []),
  record('united-dc3-crash', 17, '社会', '联合航空 DC-3 在怀俄明州坠毁', '美国 · 怀俄明州海登斯峰',
    '联合航空一架 DC-3 客机在怀俄明州恶劣天气中坠毁，19人全部遇难。',
    '10月17日，联合航空公司一架道格拉斯 DC-3 客机在怀俄明州海登斯峰附近因恶劣天气坠毁，机上19人全部遇难。事故促使美国民航进一步关注山区航路与气象预报。\n\n空难是民航安全史的节点，不等于美国当天修改航空法规；具体事故原因、调查结论与后续安全措施须据民航档案。本条只记坠毁与死亡人数。',
    'octUsOct',
    '1937年10月事件汇编记10月17日联合航空DC-3坠毁、19人遇难；事故调查报告未逐条核对。',
    ['octUsOct'], []),
  record('nyse-crash', 18, '经济', '纽约股市跌至两年低点', '美国 · 纽约',
    '纽约证券交易所股价跌至125.73点，为两年最低，1937—1938年衰退加剧。',
    '10月18日，纽约证券交易所股价跌至125.73点，为两年最低水平。此前美国经济在1937年春季已出现衰退迹象，股市下跌与工业生产下降、财政紧缩相互作用，形成1937—1938年衰退。\n\n股市下跌是经济衰退的节点，不等于当天发生银行危机或大萧条重演；具体指数、成交量与政策反应须据金融档案。本条只记股市低点。',
    'octUsOct',
    '1937年10月事件汇编记10月18日纽交所125.73点、两年低点；指数与政策记录未逐条核对。',
    ['octUsOct'], ['roosevelt']),
]
