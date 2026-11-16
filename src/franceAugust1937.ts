import type { Category, HistoryEvent } from './data'

// August 1937 in France: a memorial to the Meuse-Argonne, a protest over the
// Shanghai bombing, and the death of composer Albert Roussel.
export const franceAugustSources = {
  augFrAugust: { name: 'Wikipedia · August 1937', url: 'https://en.wikipedia.org/wiki/August_1937' },
}

type SourceId = keyof typeof franceAugustSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `aug37-fr-${id}`, year: 1937, month: 8, country: 'france', day,
    date: `1937年8月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceAugustEvents: HistoryEvent[] = [
  record('meuse-argonne-memorial', 1, '社会', '默兹-阿戈讷美军纪念碑落成', '法国 · 蒙福孔',
    '纪念第一次世界大战默兹-阿戈讷战役的美军纪念碑在法国落成。',
    '8月1日，默兹-阿戈讷美军纪念碑在法国蒙福孔落成。纪念碑纪念1918年默兹-阿戈讷攻势中阵亡的美国士兵，是美法战时同盟记忆的一部分。\n\n纪念碑落成是战争纪念与美法关系事件，不等于当时欧洲局势已经缓和；具体设计、出席者与纪念活动须据纪念碑档案。本条只记落成。',
    'augFrAugust',
    '1937年8月事件汇编记8月1日默兹-阿戈讷美军纪念碑落成；仪式与设计档案未逐条核对。',
    ['augFrAugust'], []),
  record('protest-shanghai-bombing', 16, '外交', '法国就上海租界遭轰炸向中国提出抗议', '中国 · 上海',
    '法国政府就上海法租界与国际公共租界遭空袭、千余人死亡向中国政府提出抗议。',
    '8月16日，法国就上海法租界与国际公共租界遭空袭、千余人死亡向中国政府提出抗议。此前中国空军攻击日本军舰时，炸弹误落租界平民区，造成大量外侨与华人伤亡。\n\n抗议是领事保护与外交交涉，不等于法国改变对中日战争的中立立场；事件也反映淞沪会战中平民与租界的危险处境。具体伤亡、责任与赔偿须据法国领事档案；本条只记抗议。',
    'augFrAugust',
    '1937年8月事件汇编记8月16日法国就上海租界空袭伤亡向中国提出抗议；伤亡数字与领事档案未逐条核对。',
    ['augFrAugust'], []),
  record('roussel-death', 23, '文化', '作曲家阿尔贝·鲁塞尔去世', '法国 · 鲁瓦扬',
    '法国作曲家阿尔贝·鲁塞尔去世，享年68岁。',
    '8月23日，法国作曲家阿尔贝·鲁塞尔去世，享年68岁。他是20世纪初法国重要作曲家，作品包括交响曲、室内乐与歌剧《帕德玛瓦蒂》，风格兼有印象主义与古典形式。\n\n鲁塞尔的去世是法国音乐史节点，不等于其作品当天停止演出；葬礼、作品评价与音乐教育贡献须据音乐史资料。本条只记去世。',
    'augFrAugust',
    '鲁塞尔条目与1937年8月事件汇编记8月23日去世、享年68岁；病史与葬礼记录未逐条核对。',
    ['augFrAugust'], []),
]
