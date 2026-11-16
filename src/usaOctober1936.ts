import type { Category, HistoryEvent } from './data'

// October 1936 in the United States: the World Series, Boulder Dam power,
// Al Smith's defection, and Roosevelt's Madison Square Garden speech.
export const usaOctober1936Sources = {
  oct36UsDec: { name: 'Wikipedia · October 1936', url: 'https://en.wikipedia.org/wiki/October_1936' },
  oct36UsSeries: { name: 'Wikipedia · 1936 World Series', url: 'https://en.wikipedia.org/wiki/1936_World_Series' },
  oct36UsDam: { name: 'Wikipedia · Hoover Dam', url: 'https://en.wikipedia.org/wiki/Hoover_Dam' },
  oct36UsElection: { name: 'Wikipedia · 1936 United States presidential election', url: 'https://en.wikipedia.org/wiki/1936_United_States_presidential_election' },
}

type SourceId = keyof typeof usaOctober1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `oct36-us-${id}`, year: 1936, month: 10, country: 'usa', day,
    date: `1936年10月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['usa', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const usaOctober1936Events: HistoryEvent[] = [
  record('al-smith-endorsement', 1, '政治', '阿尔·史密斯公开支持兰登', '美国 · 纽约',
    '民主党前总统候选人阿尔·史密斯发表广播讲话，转而支持共和党候选人兰登。',
    '10月1日，1928年民主党总统候选人阿尔·史密斯发表全国广播讲话，宣布支持共和党候选人阿尔夫·兰登，与罗斯福决裂。史密斯是纽约州政治的重要人物，他的倒戈反映新政联盟内部的分歧。\n\n这次表态是1936年选战中的政治事件，不等于民主党基层大规模倒戈；具体演讲内容、支持者反应与各州选情须据选举档案。本条只记公开支持。',
    'oct36UsDec',
    '1936年10月事件汇编记10月1日阿尔·史密斯发表广播讲话支持兰登；演讲全文与选情数据未逐条核对。',
    ['oct36UsElection'], []),
  record('world-series', 6, '文化', '纽约洋基队赢得1936年世界大赛', '美国 · 纽约',
    '纽约洋基队以4比2击败纽约巨人队，赢得1936年世界大赛冠军。',
    '10月6日，纽约洋基队在第六场以13比5击败纽约巨人队，以总比分4比2赢得1936年世界大赛冠军。系列赛中洋基队曾在第二场攻下18分，创下球队在世界大赛单场得分纪录。\n\n世界大赛是1936年美国职业体育与大众文化的重要事件，乔·迪马吉奥等球员在这一年受到关注。具体比赛数据、球员表现与观众人数须据棒球档案；本条只记夺冠。',
    'oct36UsSeries',
    '1936年世界大赛条目与10月事件汇编记10月6日洋基队第六场13比5获胜、总比分4比2夺冠；比赛数据与观众人数未逐条核对。',
    ['oct36UsDec'], []),
  record('boulder-dam-power', 9, '经济', '胡佛水坝开始发电', '美国 · 内华达、亚利桑那交界',
    '博尔德水坝（胡佛水坝）开始发电，为美国西南部提供电力。',
    '10月9日，博尔德水坝（今胡佛水坝）开始发电。水坝位于科罗拉多河上，是1930年代美国大型公共工程与水利、电力建设的重要标志，为西南部城市与农业提供电力。\n\n开始发电是工程节点，不等于全部机组当天投入运行；后续机组、输电线路与工程完工在1930年代后期继续。具体首台机组、发电量与工程记录须据垦务局档案。本条只记开始发电。',
    'oct36UsDam',
    '胡佛水坝条目与1936年10月事件汇编记10月9日开始发电；首台机组、发电量与工程记录未逐条核对。',
    ['oct36UsDec'], []),
  record('madison-square-garden-speech', 31, '政治', '罗斯福在麦迪逊广场花园发表竞选演说', '美国 · 纽约',
    '罗斯福在麦迪逊广场花园发表竞选演说，抨击“经济保皇派”。',
    '10月31日，罗斯福在纽约麦迪逊广场花园发表竞选演说，抨击反对新政的“经济保皇派”，表示“我欢迎他们的仇恨”。演说成为1936年选战中最具动员力的讲话之一，数日后罗斯福以压倒性优势连任。\n\n演说是竞选活动的高潮，不等于所有听众支持新政；具体演讲文本、现场规模与舆论反应须据竞选档案。本条只记演说。',
    'oct36UsElection',
    '1936年美国总统选举资料记10月31日罗斯福在麦迪逊广场花园发表竞选演说；演讲全文与现场记录未逐条核对。',
    ['oct36UsDec'], ['roosevelt']),
]
