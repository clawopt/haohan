import type { Category, HistoryEvent } from './data'

// April 1937 in Japan: the Manchurian succession marriage, a long-distance
// flight to Europe, the four-ministers' China policy, and the general election.
export const japanAprilSources = {
  aprJpMarch: { name: 'Wikipedia · April 1937', url: 'https://en.wikipedia.org/wiki/April_1937' },
  aprJpElection: { name: '选举情报局 · 第20回众议院议员总选举（1937年4月30日）', url: 'https://senkyoinfo.jp/national/shugiin/20' },
  aprJpChronology: { name: '人民网 · 抗战大事记·1937年', url: 'http://dangshi.people.com.cn/n/2015/0429/c85037-26926310.html' },
  aprJpPujie: { name: 'Wikipedia · Pujie', url: 'https://en.wikipedia.org/wiki/Pujie' },
  aprJpKamikaze: { name: 'Wikipedia · Kamikaze (aircraft)', url: 'https://en.wikipedia.org/wiki/Kamikaze_(aircraft)' },
}

type SourceId = keyof typeof japanAprilSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `apr37-jp-${id}`, year: 1937, month: 4, country: 'japan', day,
    date: `1937年4月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['japan', ...actors])], source, topicIds: [],
    evidenceNote: '日期指本条所记仪式、飞行或会议的发生日；未由资料支持的政策结果不作补写。',
    ...extra,
  }
}

export const japanAprilEvents: HistoryEvent[] = [
  record('pujie-wedding', 3, '社会', '溥杰与嵯峨浩在东京举行婚礼', '日本 · 东京',
    '伪满洲国皇弟溥杰与日本贵族嵯峨浩结婚，强化“日满一体”的政治象征。',
    '4月3日，伪满洲国皇帝溥仪的弟弟溥杰与日本侯爵嵯峨实胜之女嵯峨浩在东京举行婚礼，仪式采用神道形式。两人于2月2日订婚，婚礼按预定日期举行。\n\n这桩婚姻发生在日本扶植伪满洲国、推动“日满一体”的背景下，具有政治象征意义。婚礼是仪式节点，不等于两人的家庭生活或伪满洲国政治地位当天发生变化；相关评价须与日本殖民政策分开理解。',
    ['hirohito'], 'aprJpPujie', {
      references: ['aprJpMarch'],
      evidenceNote: '1937年4月事件汇编与溥杰条目均记4月3日婚礼；神道仪式细节见所引同期报道，婚礼全文记录未逐条核对。',
    }),
  record('kamikaze-europe', 9, '文化', '“神风”号成为首架飞抵欧洲的日本飞机', '日本 → 英国 · 克罗伊登',
    '日本“神风”号飞机完成从日本到欧洲的飞行，抵达伦敦克罗伊登机场。',
    '4月9日，日本“神风”号飞机抵达英国伦敦克罗伊登机场，成为第一架从日本飞抵欧洲的日本制造飞机。这次飞行是战前日本航空技术与远程飞行宣传的重要事件，飞行路线与经停地点跨越亚洲和欧洲多国。\n\n远程飞行成功是航空与宣传节点，不等于日本民航或军事航空已经具备同样的常态运输能力。机组、飞行时长与经停记录须据航空史资料；本条只记抵达欧洲这一结果。',
    [], 'aprJpKamikaze', {
      references: ['aprJpMarch'],
      evidenceNote: '1937年4月事件汇编记4月9日“神风”号抵达克罗伊登、为首架飞抵欧洲的日本飞机；机组与航线细节未逐项核对。',
    }),
  record('four-ministers', 16, '外交', '日本四相会议决定对华策略', '日本 · 东京',
    '外、陆、海、藏四相会议决定《对中国实施的策略》和《指导华北方针》。',
    '4月16日，日本外务、陆军、海军、大藏四相会议决定《对中国实施的策略》和《指导华北方针》。这两份文件把日本在华北的特殊化要求、经济开发与政治控制进一步系统化，是七七事变前日本对华政策的重要节点。\n\n四相会议的决定是日本政府内部的政策文件，不等于中国方面已经接受或国际社会已经承认。文件条款与执行情况须据日本外交文书；本条只记会议与文件名称，不据后来的战争进程补写细节。',
    [], 'aprJpChronology', {
      evidenceNote: '人民网抗战大事记记4月16日四相会议决定两份文件；日本外交文书与外务省会议记录未逐条核对。',
    }),
  record('general-election', 30, '政治', '第20回众议院议员总选举举行', '日本 · 全国',
    '林铣十郎内阁解散众议院后举行大选，执政阵营失利。',
    '4月30日，日本举行第20回众议院议员总选举。此前林铣十郎内阁于3月31日解散众议院；选举中执政阵营未能取得优势，立宪民政党等政党获得较多席位。林内阁在选举后于5月31日辞职，近卫文麿随后组阁。\n\n选举结果是对林内阁超党派路线的否定，不等于日本政党政治已经稳定；军部对政府的压力仍在加强。具体议席、投票率与各党得票须据选举记录。',
    ['hirohito'], 'aprJpElection', {
      references: ['aprJpMarch'], topicIds: ['japanese-cabinets'],
      evidenceNote: '选举情报局与1937年日本条目记4月30日第20回总选举；议席与得票数据见选举记录，内阁辞职日期另见相关条目。',
    }),
]
