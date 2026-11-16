import type { Category, HistoryEvent } from './data'

// June 1937 in the USSR: the secret military trial and executions, a
// trans-polar flight, and another high-level suicide.
export const ussrJuneSources = {
  junSuTukh: { name: 'РИА Новости · 图哈切夫斯基与“军人案”', url: 'https://ria.ru/20100208/208260454.html' },
  junSuANT: { name: 'Wikipedia · Tupolev ANT-25', url: 'https://en.wikipedia.org/wiki/Tupolev_ANT-25' },
  junSuCherv: { name: 'Wikipedia · Alexander Chervyakov', url: 'https://en.wikipedia.org/wiki/Alexander_Chervyakov' },
  junSuJune: { name: 'Wikipedia · June 1937', url: 'https://en.wikipedia.org/wiki/June_1937' },
}

type SourceId = keyof typeof ussrJuneSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `jun37-su-${id}`, year: 1937, month: 6, country: 'ussr', day,
    date: `1937年6月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['ussr', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const ussrJuneEvents: HistoryEvent[] = [
  record('tukhachevsky-trial', 11, '军事', '图哈切夫斯基等红军将领秘密受审', '苏联 · 莫斯科',
    '最高法院特别法庭秘密审判图哈切夫斯基等八名红军高级将领，随后判处死刑。',
    '6月11日，苏联最高法院特别法庭对图哈切夫斯基、亚基尔、乌博列维奇、科尔克、普里马科夫、普特纳、费尔德曼、埃德曼八名红军高级将领进行秘密审判，指控他们组织“反苏托洛茨基军事组织”并为德国从事间谍活动。审判在一天内结束，当晚23时35分宣判死刑。\n\n审判中的供述是在内务人民委员部审讯与酷刑下取得的，不能当作已证实的犯罪事实；八人于6月12日凌晨被处决。本条只记审判与判决，不把后来的平反或历史评价混入当日。',
    'junSuTukh',
    'РИА Новости记6月11日23时35分宣判、6月12日晨处决；审判记录与供述原文未逐页核对，指控不作事实认定。',
    ['junSuJune'], ['stalin']),
  record('ant25-polar-flight', 20, '文化', '苏联 ANT-25 完成跨越北极的飞行', '苏联 → 美国 · 华盛顿州温哥华',
    '契卡洛夫机组驾驶 ANT-25 飞越北极，抵达美国华盛顿州。',
    '6月20日，苏联飞行员瓦列里·契卡洛夫、格奥尔基·拜杜科夫与亚历山大·别利亚科夫驾驶图波列夫 ANT-25 飞机，从莫斯科起飞，飞越北极后抵达美国华盛顿州温哥华附近的皮尔逊机场。这次飞行旨在测试跨极地航线的可行性。\n\n跨极飞行是苏联航空与宣传的重大成就，不等于跨极商业航线当天已经开通；飞行距离、时间与经停须据航空记录。本条只记抵达。',
    'junSuANT',
    'ANT-25条目与1937年6月事件汇编记6月20日飞越北极并抵达温哥华；飞行日志与机组记录未逐条核对。',
    ['junSuJune'], []),
  record('chervyakov-death', 16, '政治', '白俄罗斯领导人切尔维亚科夫去世', '苏联 · 明斯克',
    '白俄罗斯共产党领导人切尔维亚科夫在清洗压力下自杀。',
    '6月16日，白俄罗斯共产党（布）中央委员会书记亚历山大·切尔维亚科夫去世，官方说法为自杀。他在大清洗中受到指控，面临被捕与审判的压力。\n\n切尔维亚科夫的死在官方记录与后来的研究中有不同解释，不能简单写成“畏罪自杀”；其政治处境与大清洗背景须据档案。本条只记去世日期与身份，不把指控当作事实。',
    'junSuCherv',
    '切尔维亚科夫条目与1937年6月事件汇编记6月16日去世、官方说法为自杀；死亡证明与内务部档案未逐条核对。',
    ['junSuJune'], ['stalin']),
]
