import type { Category, HistoryEvent } from './data'

// August 1937 in Britain: the ambassador in China is wounded, London protests
// to Japan, a German correspondent is expelled, and Wooderson sets a mile
// record.
export const britainAugustSources = {
  augBrAugust: { name: 'Wikipedia · August 1937', url: 'https://en.wikipedia.org/wiki/August_1937' },
}

type SourceId = keyof typeof britainAugustSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `aug37-br-${id}`, year: 1937, month: 8, country: 'britain', day,
    date: `1937年8月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const britainAugustEvents: HistoryEvent[] = [
  record('ebbott-expelled', 9, '外交', '英国记者埃布特被德国驱逐', '德国 · 柏林',
    '英国《泰晤士报》记者埃布特被德国要求离境，英德新闻界冲突升级。',
    '8月9日，英国《泰晤士报》驻柏林记者诺曼·埃布特被德国要求离境。此前英国以间谍嫌疑驱逐三名德国记者，德国此举为报复，英德新闻界与外交关系趋于紧张。\n\n记者驱逐是外交与新闻自由事件，不等于两国关系全面破裂；具体驱逐程序与英国回应须据外交部档案。本条只记埃布特被驱逐。',
    'augBrAugust',
    '1937年8月事件汇编记8月9日埃布特被德国要求离境；英国外交部档案与驱逐令未逐条核对。',
    ['augBrAugust'], []),
  record('ambassador-wounded', 26, '外交', '英国驻华大使遭日机扫射受伤', '中国 · 上海附近',
    '英国驻华大使克纳奇布尔-休格森的车队遭日机扫射，大使受伤。',
    '8月26日，英国驻华大使休格·克纳奇布尔-休格森在上海附近乘车时，遭日本飞机扫射，大使受伤。事件发生在淞沪会战期间，外国外交人员安全受到威胁。\n\n大使遇袭引发英国对日交涉，英国随后向日本提出正式抗议并要求道歉。事件是日本侵华战争外溢到第三国外交人员的典型案例；具体伤情、日方回应与赔偿须据英国外交部档案。本条只记遇袭。',
    'augBrAugust',
    '1937年8月事件汇编记8月26日英国驻华大使遭日机扫射受伤；英国外交部档案与日方回应未逐条核对。',
    ['augBrAugust'], []),
  record('wooderson-mile', 28, '文化', '伍德森创造一英里跑世界纪录', '英国 · 伦敦 · 莫茨珀公园',
    '英国运动员悉尼·伍德森以4分6.4秒创造一英里跑世界纪录。',
    '8月28日，英国运动员悉尼·伍德森在伦敦莫茨珀公园以4分6.4秒创造一英里跑世界纪录。伍德森是1930年代英国中长跑的代表人物，这一纪录使他成为当时世界最快的英里跑者之一。\n\n纪录是体育史节点，不等于伍德森此后保持不败；纪录认证、比赛条件与后续成绩须据田径档案。本条只记纪录。',
    'augBrAugust',
    '1937年8月事件汇编记8月28日伍德森4分6.4秒一英里世界纪录；比赛记录与认证文件未逐条核对。',
    ['augBrAugust'], []),
  record('protest-japan', 29, '外交', '英国就大使遇袭向日本提出抗议', '英国 · 伦敦 / 日本 · 东京',
    '英国向日本政府发出措辞强硬的抗议，要求正式道歉。',
    '8月29日，英国就驻华大使克纳奇布尔-休格森遭日机扫射受伤向日本政府发出措辞强硬的抗议，要求正式道歉。抗议发生在淞沪会战期间，英国要求日本约束军队、保护第三国外交人员。\n\n抗议是外交交涉，不等于日本当天正式道歉或赔偿；日方回应与后续处理须据两国外交档案。本条只记英国提出抗议。',
    'augBrAugust',
    '1937年8月事件汇编记8月29日英国向日本提出抗议、要求正式道歉；抗议照会与日方回应未逐条核对。',
    ['augBrAugust'], []),
]
