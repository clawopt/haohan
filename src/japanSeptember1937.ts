import type { Category, HistoryEvent } from './data'

// September 1937 in Japan: the naval blockade of China and the capture of
// Datong.
export const japanSeptemberSources = {
  sepJpSept: { name: 'Wikipedia · September 1937', url: 'https://en.wikipedia.org/wiki/September_1937' },
}

type SourceId = keyof typeof japanSeptemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `sep37-jp-${id}`, year: 1937, month: 9, country: 'japan', day,
    date: `1937年9月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['japan', ...actors])], source, topicIds: [],
    evidenceNote: '日期指本条所记封锁或占领的发生日；未由资料支持的政策结果不作补写。',
    ...extra,
  }
}

export const japanSeptemberEvents: HistoryEvent[] = [
  record('china-coast-blockade', 5, '军事', '日本宣布封锁中国海岸', '中国沿海',
    '日本宣布封锁中国海岸，仅保留外国享有条约权利的港口。',
    '9月5日，日本宣布封锁中国海岸，范围覆盖除外国享有条约权利的港口之外的整个中国海岸线。封锁旨在切断中国的海上补给与对外贸易，配合日军在华北、上海的进攻。\n\n封锁是日本对华战争升级的节点，不等于中国海上运输当天完全停止；外国租界港口与走私渠道仍在运作。具体封锁范围、执行舰艇与效果须据日本海军档案。本条只记宣布封锁。',
    [], 'sepJpSept', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年9月事件汇编记9月5日日本宣布封锁中国海岸、条约港口除外；日本海军封锁令与执行记录未逐条核对。',
    }),
  record('datong-falls', 13, '军事', '日军占领大同', '山西 · 大同',
    '日军占领山西大同，晋北防线被突破。',
    '9月13日，日军占领山西大同。此前日军沿平绥铁路推进，占领天镇、广灵等地，中国守军后退；大同失守使晋北防线被突破，日军得以继续南下进攻太原。\n\n大同失守是太原会战前的重要节点，不等于山西全境当天沦陷；中国军队随后在平型关、忻口等地继续抵抗。具体战斗经过、守军番号与撤退路线须据战史档案。本条只记失守。',
    [], 'sepJpSept', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年9月事件汇编记9月13日日军占领大同；中国守军部署与战斗经过未逐条核对。',
    }),
]
