import type { Category, HistoryEvent } from './data'

// September 1937 in Britain: Mediterranean piracy, the Nyon Conference, Eden
// at the League, The Hobbit, and the murder of a district commissioner.
export const britainSeptemberSources = {
  sepBrSept: { name: 'Wikipedia · September 1937', url: 'https://en.wikipedia.org/wiki/September_1937' },
}

type SourceId = keyof typeof britainSeptemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `sep37-br-${id}`, year: 1937, month: 9, country: 'britain', day,
    date: `1937年9月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const britainSeptemberEvents: HistoryEvent[] = [
  record('woodford-sunk', 1, '军事', '英国油轮“伍德福德”号被意大利潜艇击沉', '西班牙附近海域',
    '英国油轮“伍德福德”号在西班牙附近被意大利潜艇击沉。',
    '9月1日，英国油轮“伍德福德”号在西班牙附近海域被意大利潜艇“迪亚斯普罗”号击沉。事件是西班牙内战期间地中海航运遭袭的一部分，加剧了英国对“不明潜艇”袭击的担忧。\n\n袭击方为意大利潜艇，但具体命令与责任须据意大利海军档案；英国随后参与Nyon会议讨论反潜艇巡逻。本条只记击沉。',
    'sepBrSept',
    '1937年9月事件汇编记9月1日“伍德福德”号被意大利潜艇击沉；海军档案与事件调查未逐条核对。',
    ['sepBrSept'], []),
  record('nyon-conference', 10, '外交', '尼尔荣会议讨论地中海海盗式袭击', '瑞士 · 尼尔荣',
    '英法等国在尼尔荣开会，讨论对地中海不明潜艇袭击商船的应对。',
    '9月10日至14日，英国、法国等国家在瑞士尼尔荣举行会议，讨论西班牙内战期间地中海“不明潜艇”袭击商船的问题。会议达成协议，建立巡逻区，授权巡逻舰艇对袭击商船的潜艇进行反击；英国与法国承担主要巡逻责任。\n\n尼尔荣会议是欧洲海军合作应对地中海危机的节点，不等于袭击当天停止或西班牙内战外溢结束。具体巡逻分区、舰艇与协议文本须据会议档案。本条只记会议。',
    'sepBrSept',
    '1937年9月事件汇编记9月10日尼尔荣会议开幕、9月14日达成巡逻协议；会议记录与协议文本未逐条核对。',
    ['sepBrSept'], ['chamberlain']),
  record('eden-league-speech', 20, '外交', '艾登在国际联盟大会发表演说', '瑞士 · 日内瓦',
    '英国外交大臣艾登在国联大会批评意大利、日本的政策，并劝德国通过贸易获取原料。',
    '9月20日，英国外交大臣安东尼·艾登在国际联盟大会发表演说，告诉意大利和日本，其领土征服政策正在财政上损害自身；并告诉德国，获取原料的正确途径是购买而不是索取殖民地。\n\n演说反映英国对德意日扩张的批评与对国联的有限支持，不等于英国当天采取制裁或军事行动。具体演说原文与英国外交政策须据外交部档案。本条只记演说。',
    'sepBrSept',
    '1937年9月事件汇编记9月20日艾登国联演说；演说原文与外交部档案未逐字核对。',
    ['sepBrSept'], []),
  record('hobbit-published', 21, '文化', '《霍比特人》在英国出版', '英国 · 伦敦',
    '托尔金儿童奇幻小说《霍比特人》在英国出版。',
    '9月21日，J. R. R. 托尔金的儿童奇幻小说《霍比特人》（The Hobbit）在英国出版。小说讲述比尔博·巴金斯与矮人、巫师甘道夫的冒险，后来成为《指环王》的前传。\n\n出版是英国奇幻文学与儿童文学的节点，不等于小说当天即成为畅销书；首印数量、评论与后续版本须据出版档案。本条只记出版。',
    'sepBrSept',
    '1937年9月事件汇编记9月21日《霍比特人》在英国出版；出版档案与首印记录未逐条核对。',
    ['sepBrSept'], []),
  record('andrews-assassinated', 26, '政治', '英国加利利地区专员安德鲁斯遇刺', '巴勒斯坦 · 拿撒勒',
    '英国加利利地区专员刘易斯·安德鲁斯在拿撒勒被枪杀。',
    '9月26日，英国加利利地区专员刘易斯·耶兰·安德鲁斯在巴勒斯坦拿撒勒被枪杀，其保镖同时遇害。安德鲁斯负责执行英国委任统治下的地方行政，事件发生在阿拉伯起义与皮尔委员会分治建议后的紧张局势中。\n\n刺杀是巴勒斯坦殖民冲突的节点，不等于英国当天改变政策；英国随后逮捕120名嫌疑人，并继续镇压起义。具体凶手、组织与审判须据英国托管档案。本条只记刺杀。',
    'sepBrSept',
    '1937年9月事件汇编记9月26日安德鲁斯在拿撒勒遇刺、英国随后逮捕120人；托管档案与审判记录未逐条核对。',
    ['sepBrSept'], []),
]
