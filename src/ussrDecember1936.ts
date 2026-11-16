import type { Category, HistoryEvent } from './data'

// December 1936 in the USSR: the "Stalin Constitution" is adopted and a Soviet
// freighter is sunk off Spain.
export const ussrDecember1936Sources = {
  dec36SuDec: { name: 'Wikipedia · December 1936', url: 'https://en.wikipedia.org/wiki/December_1936' },
  dec36SuConstitution: { name: '俄罗斯总统图书馆 · 1936年“斯大林宪法”通过', url: 'https://www.prlib.ru/en/history/619782' },
}

type SourceId = keyof typeof ussrDecember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `dec36-su-${id}`, year: 1936, month: 12, country: 'ussr', day,
    date: `1936年12月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['ussr', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const ussrDecember1936Events: HistoryEvent[] = [
  record('stalin-constitution', 5, '政治', '苏联通过1936年宪法', '苏联 · 莫斯科',
    '苏联苏维埃第八次非常代表大会通过新宪法，即“斯大林宪法”。',
    '12月5日，苏联苏维埃第八次非常代表大会通过新宪法，即1936年宪法，又称“斯大林宪法”。宪法共13章146条，宣布苏联为工农社会主义国家，规定最高苏维埃为最高国家权力机关，并确立普遍、平等、直接、秘密选举的原则。\n\n宪法在文本上扩大了公民权利与选举制度，但在大清洗背景下，实际政治生活并未实现宪法所规定的民主权利。具体条款、讨论过程与实施情况须据苏联档案；本条只记通过。',
    'dec36SuConstitution',
    '俄罗斯总统图书馆与1936年12月事件汇编记12月5日第八次非常苏维埃代表大会通过新宪法；宪法全文与实施记录未逐条核对。',
    ['dec36SuDec'], ['stalin']),
  record('komsomol-sunk', 14, '军事', '苏联货轮“共青团”号被击沉', '地中海 · 瓦伦西亚附近',
    '苏联货轮“共青团”号在离开瓦伦西亚时被西班牙国民军巡洋舰击沉。',
    '12月14日，苏联货轮“共青团”号在离开西班牙瓦伦西亚时被西班牙国民军巡洋舰“加那利”号击沉。事件是西班牙内战期间外国船只遭袭的一部分，加剧了苏联与佛朗哥方面及德意的紧张。\n\n击沉是军事行动节点，不等于苏联当天决定大规模军事介入；苏联对西班牙共和国的援助在此前已经进行。具体船只、伤亡与外交反应须据档案。本条只记击沉。',
    'dec36SuDec',
    '1936年12月事件汇编记12月14日“共青团”号被“加那利”号击沉；伤亡与外交记录未逐条核对。',
    ['dec36SuDec'], ['stalin']),
]
