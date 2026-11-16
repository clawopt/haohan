import type { Category, HistoryEvent } from './data'

// December 1937 in Britain: a new Palestine High Commissioner, The Dandy, the
// Castlecary rail disaster, and the first Christmas message.
export const britainDecemberSources = {
  decBrDec: { name: 'Wikipedia · December 1937', url: 'https://en.wikipedia.org/wiki/December_1937' },
}

type SourceId = keyof typeof britainDecemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `dec37-br-${id}`, year: 1937, month: 12, country: 'britain', day,
    date: `1937年12月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const britainDecemberEvents: HistoryEvent[] = [
  record('macmichael-palestine', 3, '外交', '英国任命巴勒斯坦新任高级专员', '英国 · 伦敦',
    '张伯伦政府任命哈罗德·麦克迈克尔为巴勒斯坦高级专员。',
    '12月3日，英国首相张伯伦任命哈罗德·麦克迈克尔为下一任巴勒斯坦高级专员，接替因健康原因退休的阿瑟·格伦费尔·沃科普。此时巴勒斯坦阿拉伯起义仍在持续。\n\n任命是殖民人事节点，不等于英国巴勒斯坦政策当天改变；麦克迈克尔后来处理分治建议与1939年白皮书。具体任命文件与政策须据英国托管档案。本条只记任命。',
    'decBrDec',
    '1937年12月事件汇编记12月3日麦克迈克尔被任命为巴勒斯坦高级专员；托管档案与任命程序未逐条核对。',
    ['decBrDec'], ['chamberlain']),
  record('dandy-published', 4, '文化', '《The Dandy》在英国创刊', '英国 · 邓迪',
    '英国儿童漫画杂志《The Dandy》首次出版，Desperate Dan 首次登场。',
    '12月4日，英国儿童漫画杂志《The Dandy》在邓迪首次出版，漫画角色“绝望的丹”（Desperate Dan）首次登场。杂志后来成为英国连载时间最长的儿童漫画之一。\n\n创刊是英国漫画与儿童文化节点，不等于杂志当天形成全国影响；首印数量、作者与后续发展须据出版档案。本条只记创刊。',
    'decBrDec',
    '《The Dandy》条目与1937年12月事件汇编记12月4日创刊；出版档案与首印记录未逐条核对。',
    ['decBrDec'], []),
  record('castlecary-rail', 10, '社会', '卡斯尔卡里铁路事故', '英国 · 苏格兰 · 卡斯尔卡里',
    '卡斯尔卡里发生列车相撞事故，35人死亡。',
    '12月10日，苏格兰卡斯尔卡里发生列车相撞事故，35人死亡。事故发生在恶劣天气与信号条件不良的背景下，是英国1930年代严重的铁路事故之一。\n\n事故是铁路安全史节点，不等于英国当天修改铁路安全法规；具体原因、调查结论与后续措施须据铁路监察档案。本条只记事故与死亡人数。',
    'decBrDec',
    '卡斯尔卡里铁路事故条目与1937年12月事件汇编记12月10日、35人死亡；事故调查报告未逐条核对。',
    ['decBrDec'], []),
  record('christmas-message', 25, '文化', '乔治六世发表首次圣诞广播', '英国 · 伦敦',
    '乔治六世发表即位后首次圣诞广播，时长四分钟。',
    '12月25日，英国国王乔治六世发表即位后首次圣诞广播，时长约四分钟，是当时最短的圣诞致辞。广播通过BBC向英国及自治领播出，成为王室战时沟通的传统起点。\n\n圣诞广播是王室与广播文化节点，不等于英国政治局势当天改变；广播内容、收听规模与后续传统须据BBC与王室档案。本条只记广播。',
    'decBrDec',
    '1937年12月事件汇编记12月25日乔治六世首次圣诞广播、约四分钟；广播录音与BBC档案未逐条核对。',
    ['decBrDec'], ['george']),
]
