import type { Category, HistoryEvent } from './data'

// December 1936 in Nazi Germany: compulsory Hitler Youth, the Gneisenau, the
// travel ban on Ossietzky, and press restrictions on the abdication story.
export const germanyDecember1936Sources = {
  dec36GeDec: { name: 'Wikipedia · December 1936', url: 'https://en.wikipedia.org/wiki/December_1936' },
}

type SourceId = keyof typeof germanyDecember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `dec36-ge-${id}`, year: 1936, month: 12, country: 'germany', day,
    date: `1936年12月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const germanyDecember1936Events: HistoryEvent[] = [
  record('hitler-youth-law', 1, '政治', '纳粹德国强制加入希特勒青年团', '德国 · 柏林',
    '纳粹政权通过法律，强制青少年加入希特勒青年团，并对转移财富到国外者处以死刑。',
    '12月1日，纳粹德国通过多项法律，规定青少年必须加入希特勒青年团，并对把财富转移到国外的人处以死刑。这些措施把青少年纳入纳粹组织，同时加强对外汇与资本外流的控制。\n\n法律是纳粹政权社会控制与战争准备的一部分，不等于所有青少年当天已经入团；具体执行、年龄范围与惩罚案例须据德国档案。本条只记法律通过。',
    'dec36GeDec',
    '1936年12月事件汇编记12月1日希特勒青年团强制入团、转移财富国外者死刑；法律原文与执行记录未逐条核对。',
    ['dec36GeDec'], ['hitler']),
  record('gneisenau-launched', 8, '军事', '德国战列舰“格奈森瑙”号下水', '德国 · 基尔',
    '德国海军“格奈森瑙”号战列舰下水，是纳粹重整军备的重要舰只。',
    '12月8日，德国海军“格奈森瑙”号战列舰下水。该舰是沙恩霍斯特级二号舰，装备11英寸主炮，后来在二战中参加多次作战，1942年改装，1945年自沉。\n\n下水是德国海军扩军节点，不等于该舰当天服役；舾装、海试与作战经历须据海军档案。本条只记下水。',
    'dec36GeDec',
    '“格奈森瑙”号条目与1936年12月事件汇编记12月8日下水；建造与服役记录未逐条核对。',
    ['dec36GeDec'], ['hitler']),
  record('ossietzky-ban', 8, '政治', '纳粹禁止奥西茨基前往奥斯陆领奖', '德国 · 柏林',
    '纳粹当局禁止和平主义者卡尔·冯·奥西茨基前往奥斯陆领取诺贝尔和平奖。',
    '12月8日，纳粹德国对记者、和平主义者卡尔·冯·奥西茨基实施旅行禁令，阻止他前往奥斯陆领取1935年诺贝尔和平奖。奥西茨基当时已被关押在集中营，无法亲自领奖。\n\n禁令是纳粹政权压制和平主义与异见者的表现，不等于诺贝尔委员会当天改变决定；奥西茨基的奖项由他人代领，他于1938年去世。具体禁令与集中营记录须据档案。本条只记禁令。',
    'dec36GeDec',
    '1936年12月事件汇编记12月8日纳粹禁止奥西茨基前往奥斯陆；集中营档案与诺贝尔记录未逐条核对。',
    ['dec36GeDec'], ['hitler']),
  record('edward-press-ban', 15, '政治', '德国报刊被禁刊登爱德华与沃利斯照片', '德国 · 柏林',
    '纳粹德国禁止报刊刊登英国前国王爱德华与沃利斯·辛普森的照片。',
    '12月15日，纳粹德国禁止报刊刊登英国前国王爱德华八世与沃利斯·辛普森的照片。此前德国媒体对英国退位危机保持沉默，随后转为受控报道。\n\n禁令是纳粹宣传控制的一部分，不等于德国公众当天无法获得相关信息；具体宣传指令与媒体报道须据德国宣传部档案。本条只记禁令。',
    'dec36GeDec',
    '1936年12月事件汇编记12月15日德国报刊被禁刊登爱德华与沃利斯照片；宣传部档案未逐条核对。',
    ['dec36GeDec'], ['hitler']),
]
