import type { Category, HistoryEvent } from './data'

// May 1937 in Japan: the Hayashi cabinet resigns and the Nagoya exposition
// closes, clearing the way for the Konoe cabinet.
export const japanMaySources = {
  mayJpResign: { name: '日本首相官邸 · 第33代林铣十郎内阁', url: 'https://www.kantei.go.jp/jp/rekidainaikaku/033.html' },
  mayJpYear: { name: 'Wikipedia · 1937 in Japan', url: 'https://en.wikipedia.org/wiki/1937_in_Japan' },
  mayJpExpo: { name: 'Wikipedia · Nagoya Pan-Pacific Peace Exposition', url: 'https://en.wikipedia.org/wiki/Nagoya_Pan-Pacific_Peace_Exposition' },
}

type SourceId = keyof typeof japanMaySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `may37-jp-${id}`, year: 1937, month: 5, country: 'japan', day,
    date: `1937年5月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['japan', ...actors])], source, topicIds: [],
    evidenceNote: '日期指本条所记内阁辞职或活动闭幕的发生日；未由资料支持的政策结果不作补写。',
    ...extra,
  }
}

export const japanMayEvents: HistoryEvent[] = [
  record('hayashi-resigns', 31, '政治', '林铣十郎内阁总辞职', '日本 · 东京',
    '在选举失利与政党、军部矛盾中，林铣十郎内阁总辞职。',
    '5月31日，林铣十郎内阁总辞职。林内阁于2月成立，3月31日解散众议院，4月30日大选后执政阵营失利，政党与军部矛盾加剧。内阁辞职后，近卫文麿于6月1日奉命组阁，6月4日正式成立近卫内阁。\n\n林内阁辞职是日本政党政治与军部压力交织的结果，不等于日本对华政策当天发生根本转向。近卫内阁成立后的政策走向须另据其施政方针与后续事件；本条只记辞职。',
    ['hirohito'], 'mayJpResign', {
      references: ['mayJpYear'], topicIds: ['japanese-cabinets'],
      evidenceNote: '首相官邸历任内阁页记林内阁任期结束；1937年日本条目记5月31日辞职、6月1日近卫奉命组阁。具体辞职声明与阁议记录未逐条核对。',
    }),
  record('nagoya-expo-closes', 31, '文化', '名古屋泛太平洋和平博览会闭幕', '日本 · 名古屋',
    '持续两个多月的名古屋泛太平洋和平博览会闭幕。',
    '5月31日，名古屋泛太平洋和平博览会在开幕两个多月后闭幕。博览会于3月15日开幕，以“和平”与泛太平洋交流为名，展示工业、交通、殖民地和城市发展等内容。\n\n博览会闭幕是展期结束，不等于日本对外政策转向和平；其展品、参观人数与宣传效果须据博览会资料。本条只记闭幕日期。',
    [], 'mayJpExpo', {
      references: ['mayJpYear'],
      evidenceNote: '名古屋博览会条目与1937年日本条目记展期3月15日至5月31日；闭幕后展品处置与参观统计未逐项核对。',
    }),
]
