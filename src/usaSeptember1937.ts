import type { Category, HistoryEvent } from './data'

// September 1937 in the United States: labor politics, Roosevelt's neutrality,
// the Hugo Black controversy, Mount Rushmore, the Yankees and Bessie Smith.
export const usaSeptemberSources = {
  sepUsSept: { name: 'Wikipedia · September 1937', url: 'https://en.wikipedia.org/wiki/September_1937' },
}

type SourceId = keyof typeof usaSeptemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `sep37-us-${id}`, year: 1937, month: 9, country: 'usa', day,
    date: `1937年9月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['usa', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const usaSeptemberEvents: HistoryEvent[] = [
  record('lewis-radio-address', 3, '政治', '约翰·刘易斯发表广播讲话批评罗斯福', '美国',
    '产联领袖刘易斯批评罗斯福在劳资纠纷中保持“公正”，并提出组建工农第三党。',
    '9月3日，美国产业工会联合会（CIO）领袖约翰·L·刘易斯发表全国广播讲话，批评罗斯福政府在劳资纠纷中自称“公正”却不支持工人，并提出组建工农第三党的可能性。\n\n讲话反映1937年新政联盟内部劳工与总统之间的紧张，不等于第三党当天成立。具体工会诉求、政治背景与后续组织须据工会与政治史资料；本条只记广播讲话。',
    'sepUsSept',
    '1937年9月事件汇编记9月3日刘易斯广播讲话与第三党提议；讲话全文与工会档案未逐条核对。',
    ['sepUsSept'], []),
  record('fdr-neutrality-press', 11, '政治', '罗斯福表示将尽力使美国不卷入战争', '美国 · 纽约',
    '罗斯福在记者会上表示将尽一切可能“使美国不卷入战争”。',
    '9月11日，罗斯福总统在纽约举行记者会，表示将尽一切可能“使美国不卷入战争”。此前日本扩大侵华、欧洲局势紧张，美国国内孤立主义情绪强烈。\n\n表态反映美国的中立政策与国内政治压力，不等于美国停止对中国的道义支持或不再关注远东局势。具体记者会内容与后续政策须据罗斯福图书馆档案；本条只记表态。',
    'sepUsSept',
    '1937年9月事件汇编记9月11日罗斯福记者会“keep us out of war”表述；记者会全文未逐字校对。',
    ['sepUsSept'], ['roosevelt']),
  record('naacp-black-telegram', 16, '政治', '全国有色人种协进会要求布莱克辞职', '美国 · 华盛顿',
    '全国有色人种协进会致电罗斯福，要求最高法院大法官布莱克辞职。',
    '9月16日，美国全国有色人种协进会（NAACP）致电罗斯福总统，要求最高法院大法官雨果·布莱克辞职，或采取适当行动消除其与三K党关联带来的争议。布莱克此前在参议院确认过程中被曝曾加入三K党。\n\n电报是民权组织对司法任命的政治施压，不等于布莱克当天辞职；布莱克此后在最高法院任职三十余年，并在部分民权判例中持自由派立场。具体电报内容与布莱克回应须据NAACP与法院档案。',
    'sepUsSept',
    '1937年9月事件汇编记9月16日NAACP致电罗斯福要求布莱克辞职；电报原文与布莱克回应未逐条核对。',
    ['sepUsSept'], ['us-supreme-court']),
  record('rushmore-lincoln', 17, '文化', '拉什莫尔山林肯头像落成', '美国 · 南达科他州',
    '拉什莫尔山国家纪念公园的亚伯拉罕·林肯头像正式落成。',
    '9月17日，美国南达科他州拉什莫尔山的亚伯拉罕·林肯头像正式落成。拉什莫尔山雕刻工程由古松·博格勒姆主持，先后完成华盛顿、杰斐逊、林肯与西奥多·罗斯福四位总统的头像。\n\n林肯头像落成是公共纪念艺术与爱国主义教育的节点，不等于整座纪念工程当天完工；后续雕刻与资金问题持续多年。具体工程进度与雕塑家记录须据国家公园管理局档案。本条只记落成。',
    'sepUsSept',
    '1937年9月事件汇编记9月17日拉什莫山林肯头像落成；工程档案与国家公园记录未逐条核对。',
    ['sepUsSept'], []),
  record('yankees-pennant', 23, '文化', '纽约扬基队赢得美联冠军', '美国',
    '纽约扬基队赢得1937年美国联盟冠军。',
    '9月23日，纽约扬基队赢得1937年美国联盟冠军（pennant）。当天底特律老虎队输给波士顿红袜队，扬基队正式锁定美联第一。扬基队随后在世界大赛中击败纽约巨人队夺冠。\n\n美联冠军是体育文化节点，不等于世界大赛当天结束；具体战绩、球员与后续比赛须据职棒档案。本条只记锁定冠军。',
    'sepUsSept',
    '1937年9月事件汇编记9月23日扬基队赢得美联冠军；战绩与季后赛记录未逐条核对。',
    ['sepUsSept'], []),
  record('bessie-smith-death', 26, '文化', '蓝调歌手贝西·史密斯去世', '美国 · 密西西比州',
    '蓝调歌手贝西·史密斯因车祸受伤后去世，年仅43岁。',
    '9月26日，美国蓝调歌手贝西·史密斯在密西西比州因车祸受伤后去世，年仅43岁。她是1920年代“蓝调皇后”，唱片销量巨大，对爵士与流行音乐影响深远。\n\n贝西·史密斯的去世是音乐史节点，不等于其唱片当天停止传播；车祸经过、医疗救治与死因在资料中有不同说法，本条不采用单一传说。',
    'sepUsSept',
    '贝西·史密斯条目与1937年9月事件汇编记9月26日去世；车祸与救治细节存在不同说法，未取单一版本。',
    ['sepUsSept'], []),
]
